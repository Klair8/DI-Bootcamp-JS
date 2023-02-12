// Exercise 1 : HTML Form #3

// Create a form like the form provided above. 
// The form should contain three inputs:
// name,
// lastname,
// submit

// Send the data to another HTML file and 
// display the sent data in the body.

const myForm = document.forms.formy;
myForm.addEventListener("submit", retrieveData);

function retrieveData(event) {
    event.preventDefault() 
    const formData = new FormData(document.forms.formy);
    
    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    const string = JSON.stringify(data);
        console.log(string)

    localStorage.setItem('data',string);

}