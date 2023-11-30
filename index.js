const addTask = document.querySelector('.add-task');
const todolistContainer = document.querySelector('#todo-list');
const inputTask = document.querySelector('.mytask');
const numberOfTasks = document.querySelector('.number-of-task');
const allchildren=todolistContainer.children;

numberOfTasks.textContent = `${allchildren.length} Task(s)`;

function AttachRemoveButton(newList) {
    const removeBtn = document.createElement('BUTTON');
    removeBtn.textContent = 'remove';
    removeBtn.className = 'remove-btn';
    newList.append(removeBtn);
}

function saveToLocalStorage() {
    const tasks = Array.from(todolistContainer.children).map(item => item.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (const task of storedTasks) {
        const newList = document.createElement('LI');
        newList.className = 'newtask';
        newList.textContent = task;
        AttachRemoveButton(newList);
        todolistContainer.append(newList);
    }
    numberOfTasks.textContent = `${storedTasks.length} Task(s)`;
}

addTask.addEventListener('click', () => {
    const newList = document.createElement('LI');
    newList.className = 'newtask';
    newList.textContent = inputTask.value;
    AttachRemoveButton(newList);
    todolistContainer.append(newList);
    numberOfTasks.textContent = `${allchildren.length} Task(s)`;
    saveToLocalStorage();
    inputTask.value = '';

});

todolistContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentNode.remove();
        saveToLocalStorage();
        numberOfTasks.textContent = `${todolistContainer.children.length} Task(s)`;
    }
});


function displayDate() {
    const dateToday = document.querySelector('.date');
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    dateToday.innerHTML = day + '-' + month + '-' + year;
}

window.onload = () => {
    displayDate();
    loadFromLocalStorage();
};


