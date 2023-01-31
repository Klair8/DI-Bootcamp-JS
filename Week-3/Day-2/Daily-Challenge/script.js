
// Get the value of each of the inputs in the HTML file when the form is submitted. 
// Remember the event.preventDefault()
// Make sure the values are not empty.
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.

const form = document.forms[0];
form.addEventListener("submit", createAStorie);

function createAStorie(evt){
        evt.preventDefault(); 
        const valueNoun = evt.target.noun.value;
        const valueAdjective = evt.target.adjective.value;
        const valuePerson = evt.target.person.value;
        const valueVerb = evt.target.verb.value;
        const valuePlace = evt.target.place.value;
        const para =  document.createElement("p");
        
        if (valueNoun =="" || valueAdjective=="" || valuePerson==""||valueVerb=="" ||valuePlace=="") {
            alert("Please enter the data");
          } else {
        const text = document.createTextNode(`Along time ago its was a person name ${valueNoun} that love , but really love to be ${valueAdjective}. 
        Unfortunatly ,some of his.her near family like  ${valuePerson} were always ${valueVerb} about it .
        ${valueNoun} feel that they weren't any other option other and decide to leave for a new adventure in${valuePlace}`)
        para.appendChild(text);
        document.body.children[2].appendChild(para)
    }
  }

     

