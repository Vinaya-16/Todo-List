
const todoinput = document.getElementById("todo-input");
const addbtn = document.getElementById("btn");
const list = document.getElementById("todo-list");
const history = document.getElementById("history");
const cross = document.getElementById("cross");

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
    }
    else {
        storage(todotext);
        todoinput.value = "";
    }

}

function storage(taskitem){
    localStorage.setItem(Date.now(),JSON.stringify(taskitem));
}

history.addEventListener("click",viewhis);

function viewhis(){
    document.querySelector(".content").style.display = "grid";
    document.querySelector(".container").style.display = "none";
}

function viewitems(todo){
        const listitem = document.createElement("li");
        listitem.innerHTML = `
        <span>${todo}</span>
        `;
        list.appendChild(listitem);
}

cross.addEventListener("click",clearhis);

function clearhis(){
    document.querySelector(".content").style.display = "none";
    document.querySelector(".container").style.display = "grid";
}

// localStorage.clear();








