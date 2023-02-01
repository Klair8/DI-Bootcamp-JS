const tasks = [];

const button = document.getElementById("button");
const input = document.getElementById("userinput");
const divs= document.getElementById("littletasks")

button.addEventListener("click", addTask)

function addTask(evt){
    evt.preventDefault()
    if (input.value.length > 0 ){
        const list = document.createElement("div")
        list.appendChild(document.createTextNode(input.value));
        divs.appendChild(list);
        // input.value.appendChild(tasks);
        input.value = "";
    } else
    alert ("please write !!")
}

