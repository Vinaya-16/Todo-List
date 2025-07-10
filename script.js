
const todoform = document.querySelector('form');
const todoinput = document.getElementById('todo-input');
const btn = document.getElementById('btn')
const todoList = document.getElementById("todo-list");

const alltodos = [];

todoform.addEventListener('submit', (e) => {
    e.preventDefault();
})

function createtodos(){
    const todotext = todoinput.value.trim();
    if(todotext.length > 0){
        alltodos.unshift(todotext);
    }
}









