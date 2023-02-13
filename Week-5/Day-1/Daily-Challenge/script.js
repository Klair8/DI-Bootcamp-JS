// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, 
// and append it on the DOM as a JSON string.


const myForm = document.forms.formy;
myForm.addEventListener("submit",retrieveData);

function retrieveData(event){
    event.preventDefault() 
    const formData = new FormData(document.forms.formy);
    
    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    const string = JSON.stringify(data);
        console.log(string)

        const p = document.createElement("p")
        p.innerText = string;
        document.body.appendChild(p);

}

