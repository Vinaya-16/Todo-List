let dataarray = [];
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

function storage(taskitem) {
    const data = localStorage.setItem("mytasks", JSON.stringify(taskitem));
}

history.addEventListener("click", viewhis);

function viewhis() {
    const cont = document.querySelector(".content");
    cont.style.display = "grid";
    document.querySelector(".container").style.display = "none";
    storehis();
}


cross.addEventListener("click", clearhis);

function clearhis() {
    document.querySelector(".content").style.display = "none";
    document.querySelector(".container").style.display = "grid";
}

function storehis() {
    const tasks = JSON.parse(localStorage.getItem("mytasks"));
    tasklist(tasks);
}

function tasklist(tasks) {
    const container = document.querySelector("#todo-list");
    container.innerHTML = `
    <li class="todo">
        ${tasks}
    </li>
    `
}
// localStorage.clear();







