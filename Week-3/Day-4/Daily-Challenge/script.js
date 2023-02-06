const tasks = [];

const button = document.getElementById("button");
const input = document.getElementById("userinput");
const divs= document.getElementById("littletasks")

button.addEventListener("click", addTask)

function addTask(evt){
    evt.preventDefault()
    if (input.value.length > 0 ){
        tasks.push(input.value);
        console.log(tasks);
        input.value = "";
        displayTask()
    } else{
    alert ("please write !!")
    }
}


function displayTask(){
for ( let i = 0 ; i < tasks.length; i++){
    const data = document.createElement("div")
    data.appendChild(document.createTextNode(tasks[i]));
    divs.appendChild(data);
}
}


// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.