const todoinput = document.getElementById("todo-input");
const addbtn = document.getElementById("btn");
const list = document.getElementById("todo-list");

addbtn.addEventListener("click",addtask);
todoinput.addEventListener("click",(e)=>{
    if(e.key === "Enter"){
        addtask();
    }
})

function addtask(){
    const todotext = todoinput.value.trim();
    if(todotext === "")
    {
        alert("Please Enter something!");
        return;
    }
    else
    {
        const listitem = document.createElement("li");
        listitem.innerHTML = `
        <span>${todotext}</span>
        `;
        list.appendChild(listitem);
        todoinput.value = "";
    }

}









