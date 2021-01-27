//selectors
const  todoInput =  document.querySelector('.todo-input');
const  todoButton =  document.querySelector('.todo-button');
const  todoList =  document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText =todoInput.value;
    newTodo.classList.add('todo-item'); 
    todoDiv.appendChild(newTodo);
    
    //check mark button

    const completedButton =document.createElement('button');
    completedButton.innerText = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button  

    const trashButton =document.createElement('button');
    trashButton.innerText = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
   //clear todo input value
   todoInput.value=" ";
}
