const addTask = document.querySelector('.add-task')
const todolistContainer = document.querySelector('#todo-list')
const inputTask = document.querySelector('.mytask')
const allListItems= todolistContainer.children;
const numberOfTasks= document.querySelector('.number-of-task')


numberOfTasks.textContent='';

function AttachRemoveButton(newList){
    const removeBtn= document.createElement('BUTTON');
    removeBtn.textContent= 'remove'
    removeBtn.className='remove-btn'
    newList.append(removeBtn)
    
    

}
for(let i=0; i< allListItems.length; i++){
    AttachRemoveButton(allListItems[i]);
}

addTask.addEventListener('click', ()=>{
    const newList= document.createElement('LI')
    newList.className='newtask'
    newList.textContent= inputTask.value;
    AttachRemoveButton(newList);
    todolistContainer.append(newList);
    numberOfTasks.textContent=`${allListItems.length}Task(s)`;
    inputTask.value= '';

})


todolistContainer.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON'){
        event.target.parentNode.remove();
    }
})
function displayDate(){
    const dateToday= document.querySelector('.date')
    let date= new Date();
    let year = date.getFullYear()
    let month= date.getMonth()
    let day= date.getDay()

    dateToday.innerHTML= day + '-' + month + '-' + year ;
}
window.onload= displayDate();
