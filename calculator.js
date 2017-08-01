
let main = document.getElementById("main")
let result = document.getElementById("result")
let num1 = null
let num2 = null
let operater = null
let answer = null


main.addEventListener("click", function(e){

	var currentValue = e.target.value
	//let num1 = result.innerHTML //+ currentValue or 
	//let num2 = result.innerHTML - num1

	if (currentValue === 'C') {
		result.innerHTML = '' 
		num1 = ''
		num2 = ''
		operater = '' 


	} else if (currentValue === '+') {
		operater = '+'
		result.innerHTML += currentValue

		//let num1 = Number(result.innerHTML)
		//let num1 = result.innerHTML //+ currentValue;
		//result.innerHTML = num1 + currentValue;
		 //{
			//if (currentValue === '=') {
				//let num2 = result.innerHTML - num1; 
				//result.innerHTML = num1 + num2
					//result.innerHTML = num1 + num2;
				//}
		//}
			//result.innerHTML += currentValue
			//let num2 = num1 - currentValue {
				//if (currentValue === '=') {
				//result.innerHTML = num1 + num2
			//}
		//}
	
// once +,-,/,x, is pressed, result.innerHTML will need to be stored into temp variable. 
// specify operater variable
// anything right of operater is new number 
// when = is pressed, call upon temp number to perform operater with new number
//result.innerHTML
	

	} else if (currentValue === '/') {
		operater = '/'
		result.innerHTML += currentValue
	} else if (currentValue === 'x') {
		operater = 'x'
		result.innerHTML += currentValue
	} else if (currentValue === '-') {
		operater = '-'
		result.innerHTML += currentValue
	} else if (currentValue === '=') {
		if (operater === '+'){
			let answer = Number (num1) + Number (num2)
			result.innerHTML = answer

		} else if (operater === '/') {
			let answer = Number (num1) / Number (num2)
			result.innerHTML = answer

		} else if (operater === 'x') {
			let answer = Number (num1) * Number(num2)
			result.innerHTML = answer

		} else if (operater === '-') {
			let answer = Number (num1) - Number(num2)
			result.innerHTML = answer
		}
		//let equals = num1 + num2
		//result.innerHTML = equals
		//console.log (num1)
	} else { // currentValue = number
		result.innerHTML += currentValue 
		console.log(currentValue)
		if (operater) { // this means if there is an operater (which is set in statements above, then anything following will be num2)
			num2 += currentValue
		} else { //if there isnt an operater, then all the numbers inputed will be num1
			num1 += currentValue
		}
	}
})

