

const btn = document.getElementById("submit");
const input = document.getElementById("fname")

function inputlenght(){
    return input.value.lenght;
}

function addDataAfterkeypress(event) {

    if (input.value.length > 0 && event.Keycode ===13){
    }
    else {
        let error = document.createElement("p");
        let text = document.createTextNode("please write letters !");
        error.appendChild(text);
        document.body.appendChild(error);
    }
}

