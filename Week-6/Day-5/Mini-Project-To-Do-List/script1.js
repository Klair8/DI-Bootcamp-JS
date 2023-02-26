
const btnSubmit = document.getElementById("submit");
const form = document.getElementById("form");
form.addEventListener('submit', addTask)


const databaseTasks = JSON.parse(localStorage.getItem("databaseTasks")) || []

// Create a new task item when clicking on the "submit" button, 
//it will be store in a new page and display there.
function addTask(e) {
    e.preventDefault()
    const valueName = document.getElementById("taskInput").value;
    const valuedes = document.getElementById("objInput").value;
    if (valueName === '' && valuedes === '') {
      alert("umm you forgot to write something"); // when the form stay empty

    } else { 
     // to get the date value
    const dateForm = Object.fromEntries(new FormData(form));
    const {start_time, end_time} = dateForm  // destructuring the object
    console.log(start_time, end_time)

     //to calcule the reminaing day
    const date1 = new Date(start_time);
    const date2 = new Date(end_time);
    const diffTime = Math.abs(date1 - date2);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays)

    // to get the name of the task and the objectifs of it
    const newTask =(`${valueName}`);
    console.log(newTask)
    const newObjectifs =(`${valuedes}`);
    console.log(newObjectifs)
   
    // creation of an object of the need value for the render page 
    //in order to push it trought the array
    const newObj = {
        nameTask : newTask,
        StartingDay :date1,
        objectifTask : newObjectifs,
        remaining_Time : diffDays    
    }

    databaseTasks.push(newObj) //array of objects
    localStorage.setItem('databaseTasks', JSON.stringify(databaseTasks));  // register to the local storage
    }

    document.getElementById("taskInput").value = "";   // erase value on the input
    document.getElementById("objInput").value = "";
     
  }


  const closeBtn = document.getElementById("close");
  closeBtn .addEventListener("click", deleteAll);
  
  function deleteAll () {
      console.log("test");
      //delete all for localstorage
      localStorage.clear();
      section.textContent = "";
      spantotal.textContent = ` --- No tasks yet ----`;
  }
  
