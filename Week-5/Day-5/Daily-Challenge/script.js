
    const button = document.getElementById("button")
    button.addEventListener("submit", convert)


const converterFr = document.getElementById("converterFr");
const converterTo = document.getElementById("converterTo");

console.log(fetch("https://v6.exchangerate-api.com/v6/6c6d85f2110b94b7dd558fe7/codes"))

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
        tagOption(data.supported_codes,converterFr,"USD")
        tagOption(data.supported_codes,converterTo,"UAH")

        }

    } catch (err){
    console.log ('error')
    }
}  
getCurrency()


function tagOption(currencies,optionTagId,value){
    currencies.forEach(cur=> {
     const option = document.createElement("option")
     option.value = `${cur[0]}`
     if(cur[0]=== value){
        option.selected=true
    }
     const optionText = document.createTextNode(`${cur[0]} - ${cur[1]}`)
     option.appendChild(optionText);
     optionTagId.appendChild(option);
    });
}


function convert(e){
    e.preventDefault()
    const currencyFrom = e.target.converterFr.value;
    const currencyTo = e.target.converterTo.value;
    const amount = e.target.amount.value;

    fetchConvertion(currencyFrom,currencyTo,amount)
}

// // console.log(fetch("https://v6.exchangerate-api.com/v6/6c6d85f2110b94b7dd558fe7/pair/EUR/GBP"))

async function fetchConvertion(from,to,amount){
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/6c6d85f2110b94b7dd558fe7/pair/${from}/${to}/${amount}`)
        console.log(response)
        if(response.status !==200){
            throw new Error(`ERROR in function`)
        }
        const result = await response.json()

        displayResult(result.conversion_result,result.target_code)

    } catch(err){
        console.log(err)
    }
}

async function displayResult(res,curr){
    const result = document.getElementById("amount")
    result.textContent = res +" "+ curr
}
  

