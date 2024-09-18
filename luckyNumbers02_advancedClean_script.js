//v0.24 
// v0.24-ADVanced TRYING TO INCORP "FROM(SET())" ****************************************************

const luckyNumbers = document.getElementById("result");
const button = document.getElementById("button");

button.addEventListener("click", getValues);

function getValues () {
	console.log("clicked")


let values = [];

for (let i = 0; i<5; i++) {
	let newValue = Math.floor((Math.random()*70)+1);
	values.push(newValue);
	
	}
let mega = Math.floor((Math.random()*25)+1);
values.push(mega);

let valuesUniq = Array.from(new Set(values));

if (valuesUniq.length < 5) {
	console.log("duplicate detected");
	getValues();
	}


luckyNumbers.innerText = `${values}`;

console.log(valuesUniq);
console.log(values);
console.log(mega);
console.log("end");
}
