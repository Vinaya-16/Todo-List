const { createElement } = require("react");

const todoinput = document.getElementById("todo-input");
const addbtn = document.getElementById("btn");
const list = document.getElementById("todo-list");
const history = document.getElementById("history");

addbtn.addEventListener("click", addtask);
todoinput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addtask();
    }
})

function addtask() {
    const todotext = todoinput.value.trim();
    if (todotext === "") {
        alert("Please Enter something!");
        return;
    }
    else {
        storage(todotext);
        const listitem = document.createElement("li");
        listitem.innerHTML = `
        <span>${todotext}</span>
        `;
        list.appendChild(listitem);
        todoinput.value = "";
    }

}

function storage(taskitem){
    localStorage.setItem(Date.now(),JSON.stringify(taskitem));
}

// history.addEventListener("click",viewhis);


// localStorage.clear();








