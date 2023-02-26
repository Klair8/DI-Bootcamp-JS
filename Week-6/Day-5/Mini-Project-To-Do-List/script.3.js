

const section = document.getElementById("containertwo");


(() => {   //retrieve everything from local storage
    const allTask = JSON.parse(localStorage.getItem('databaseTasks'));

    allTask.forEach(({nameTask, StartingDay,objectifTask,remaining_Time}) => { //obj destructuring in parameters
        const div = document.createElement("div");
        div.classList.add("task");


        // const task = objectifTask ;
        // const task_input = document.createElement("input")
        // task_input.classList.add("text");
        // task_input.type = "text";
        // task_input.value= task;
        // task_input.setAttribute("read", "read");
        // div.appendChild(task_input);


        
        const taskname = document.createElement("h3");
        const select = document.createElement('select');
        const optionDes = document.createElement('option');
        const optionDate = document.createElement('option');
        const startingD = document.createElement("p");  // start date
        const taskobjectifs = document.createElement("p");
        const timeleft = document.createElement("p");
        timeleft.className = "open";

      

        const tname = document.createTextNode(nameTask);
        const tstarting = document.createTextNode(StartingDay);
        const tobjectifs= document.createTextNode(objectifTask);
        const tleft = document.createTextNode(`${remaining_Time} days remaining, CHECK`); //dont waiste your time little logo??
       
        taskname.appendChild(tname);
        timeleft.appendChild(tleft);
        startingD.appendChild(tstarting)

        taskobjectifs.appendChild(tobjectifs);
        optionDes.append(taskobjectifs);
        optionDate.append(startingD);
        select.append(optionDes,optionDate);


        //creation checked button 
//         div.addEventListener('click', function(ev) {
//          if (ev.target.tagName === 'p') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);



 // click on the name open the description
    const open = document.getElementsByClassName("open");  // our task openning on the remaining time
    for (i = 0; i < open.length; i++) {
    open[i].onclick = function() {
    const div = this.parentElement;
    div.append(select);
}} 




        // creation EDIT button // need to be able to change and save the change 
        const task_edit_button = document.createElement("button");
        task_edit_button.classList.add("Edit");
        task_edit_button.innerHTML = "EDIT";
        div.appendChild(task_edit_button);

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


 

        div.append(taskname,timeleft,x);
        section.appendChild(div);


    })
    
})()







