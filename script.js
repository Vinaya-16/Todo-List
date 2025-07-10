const { createRef, createElement } = require("react");

const todoinput = document.getElementById("todo-input");
const list = document.getElementById('todo-list')

function click(){
    if(todoinput.value == ''){
        alert("You must write something")
    }
    else{
        let li = createElement('li');
        li.innerHTML = todoinput.value;
        list.appendChild(li);
    }
}









