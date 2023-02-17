const button = document.getElementById("button")
button.addEventListener("submit", convert)

const conFr = document.getElementById("converterFr")
const conTo = document.getElementById("converterTo")
const select = document.getElementsByTagName("select")


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
        console.log(option)

        option.value=`${curr[0]}`
        console.log(option.value)

        if(curr[0]=== value){
            option.selected=true
        }
        const optionText = document.createTextNode(`${curr[0]} - ${curr[1]}`)
        option.appendChild(optionText)
        tag.appendChild(option);  
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

// async function fetchConvertion(from,to,amount){
//     try{
//         const response = await fetch(`https://v6.exchangerate-api.com/v6/6c6d85f2110b94b7dd558fe7/pair/${from}/${to}/${amount}`)
//         console.log(response)
//         if(response.status !==200){
//             throw new Error(`ERROR in function`)
//         }
//         const result = await response.json()

//         displayResult(result.conversion_result,result.target_code)

//     } catch(err){
//         console.log(err)
//     }
// }

// async function displayResult(res,curr){
//     const result = document.getElementById("amount")
//     result.textContent = res +" "+ curr
// }
