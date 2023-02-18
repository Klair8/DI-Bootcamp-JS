const form = document.forms[0]
form.addEventListener("submit", convert)

const conFr = document.querySelector("#converterFr");
const conTo = document.querySelector("#converterTo");

async function getCurrency () {
    try{
    const response = await fetch("https://v6.exchangerate-api.com/v6/6c6d85f2110b94b7dd558fe7/codes")
    console.log(response)
        if(response.status !== 200){
            throw new Error (`Error`)
        } else {
        const data = await response.json();
        console.log(data)
        
         //call the function
        const supportedC = data.supported_codes
        console.log(supportedC)
    
        tagOption(supportedC,conFr,"USD")
        tagOption(supportedC,conTo,"ILS")

        }
    } catch (err){
    console.log ('error')
    }
}  
getCurrency()

function tagOption(list,tag,value){
    list.forEach(curr => {
        let option = document.createElement("option");
        // console.log(option)

        option.value=`${curr[0]}`
        // console.log(option.value)

        if(curr[0]=== value){
            option.selected=true
        }
        const optionText = document.createTextNode(`${curr[0]} - ${curr[1]}`)
        option.appendChild(optionText)
        tag.appendChild(option);  
    });
}


function convert(event){
    event.preventDefault();
    console.log(event.target.getAttribute('value'));
    const fromCurrency = event.target.converterFr.value;
    const toCurrency = event.target.converterTo.value;
    const amt = event.target.amount.value;
 
    fetchConvertion(fromCurrency,toCurrency ,amt)
}

// console.log(fetch("https://v6.exchangerate-api.com/v6/6c6d85f2110b94b7dd558fe7/pair/EUR/GBP"))

async function fetchConvertion(from,to,amount){
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/6c6d85f2110b94b7dd558fe7/pair/${from}/${to}/${amount}`)
        console.log(response)
        if(response.status !==200){
            throw new Error(`ERROR in function`)
        }
        const result = await response.json()
        console.log(result)
        
        displayResult(result.conversion_result,result.target_code)

    } catch(err){
        console.log(err)
    }
}

async function displayResult(res,curr){
    const p = document.getElementById("result")
    p.textContent = res +" "+ curr
}
