const section = document.getElementById("containertwo");



(() => {   //retrieve everything from local storage
    const allTask = JSON.parse(localStorage.getItem('databaseTasks'));

    //create DIV for each task

    allTask.forEach(({nameTask, StartingDay,objectifTask,remaining_Time}) => { 
        const div_task = document.createElement("div");
        div_task.classList.add("task");
       
        const taskname = document.createElement("h3");
        const timeleft = document.createElement("p");

        //create show more - dropdown for the rest of the information
        const div_show = document.createElement("div");
        div_show.className = "show";
        const treveal = document.createTextNode("Show Details");
        div_show.appendChild(treveal);

        const tname = document.createTextNode(nameTask);
        const tleft = document.createTextNode(`${remaining_Time} days remaining`); //dont waiste your time little logo??
        taskname.appendChild(tname);
        timeleft.appendChild(tleft);
      
        const reveal =  document.createElement("p")
        const startingDate = document.createElement("p");  
        const taskobjectifs = document.createElement("p");

        const tstarting = document.createTextNode(`task created ${StartingDay}`);
        const tobjectifs= document.createTextNode(objectifTask);

        startingDate.appendChild(tstarting);
        taskobjectifs.appendChild(tobjectifs);
        reveal.append(startingDate,taskobjectifs);

       
    // click on the div to open the rest of the infos :  done 
        const open = document.getElementsByClassName("show");  
        for (i = 0; i < open.length; i++) {
            open[i].onclick = function() {
            const div_show = this.parentElement;
            div_show.append(reveal);
            }
        } 

        // create a checkbox : done 
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.value = "";
        checkbox.id = "check";
        const label = document.createElement('label');
        label.appendChild(document.createTextNode('Task Advancement'));
        label.htmlFor = "label"
    
         // create a status for checkbox uncompleted default , completed + color : done
        checkbox.addEventListener('click', ()=>{
            if (this.checkbox = true) {
                label.innerText = "Completed";
                div_task.style.backgroundColor="green";
           }
            })

               

        // creation EDIT button // need to be able to change and save the change 
        const task_edit_button = document.createElement("button");
        task_edit_button.classList.add("Edit");
        task_edit_button.innerHTML = "EDIT";
        div_task.appendChild(task_edit_button);

        task_edit_button.addEventListener('click', ()=>{
            
            if (task_edit_button.innerText.toLowerCase() =="edit") {
                    task_input.removeAttribute("read");
                    task_input.focus();
                    task_edit_button.innerText = "Save";
                    task_input.style.textDecoration="none"
            }else{
                task_input.setAttribute("read", "read");
                task_edit_button.innerText = "Edit";
                
            }
        });


        // creating the button X  : done
        const x = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        x.className = "close";  // create a class name for CSS
        x.appendChild(txt);
       
        // creating the if statement to be sure they want concelation : DONE
        x.addEventListener('click', ()=>{
            if (this.x = true && confirm("Are you sure you want to delete this task?") == true){
                div_task.style.display = "none";
                // localStorage.clear();  // erase everything ??wht to change 
               } else {
                return;
               }
            } )

        div_task.append(taskname, div_show, timeleft, x)
        div_task.append(checkbox,label);   
        section.appendChild(div_task);

    })
    
})()


const closeBtn = document.getElementById("close");
closeBtn .addEventListener("click", deleteAll);

function deleteAll () {
    console.log("test");
    //delete all for localstorage
    localStorage.clear();
    section.textContent = "";
    spantotal.textContent = ` --- No tasks yet ----`;
}