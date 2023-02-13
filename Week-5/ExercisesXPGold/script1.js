
const string2 = localStorage.getItem('data')

const data2 =JSON.parse(string2);
console.log(data2);

const dataV = document.createElement("p");
const valueD = document.createTextNode(data2.name + " " + data2.lastN);

dataV.appendChild(valueD);
document.body.appendChild(dataV);
