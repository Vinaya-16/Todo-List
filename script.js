
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
        return;
    }
    let dataarray = JSON.parse(localStorage.getItem("mytasks")) || [];
    dataarray.push(todotext);
    localStorage.setItem("mytasks", JSON.stringify(dataarray));

    todoinput.value = "";
}

function displayitems() {
    list.innerHTML = "";

    const items = JSON.parse(localStorage.getItem("mytasks")) || [];

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}


history.addEventListener("click", viewhis);

function viewhis() {
    const cont = document.querySelector(".content");
    cont.style.display = "grid";
    document.querySelector(".container").style.display = "none";
    displayitems();
}


cross.addEventListener("click", clearhis);

function clearhis() {
    document.querySelector(".content").style.display = "none";
    document.querySelector(".container").style.display = "grid";
}