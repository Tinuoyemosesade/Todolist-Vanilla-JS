//selectors
const  todoInput =  document.querySelector('.todo-input');
const  todoButton =  document.querySelector('.todo-button');
const  todoList =  document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo(ev){
    //prevent form from submitting
    ev.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText ='hey';
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
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv)
}
