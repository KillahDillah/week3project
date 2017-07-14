
/*

let buttons = document.getElementsByClassName("button")
let currentValue = ''

.addEventListener("click", function() {
	button = this.value;
}
*/

//each button has an assigned value
//when each number button is pressed, that value will display
//when another number button is pressed, it will be displayed next to the previous number, creating a string.
// the display can only hold 7 characters
//when an operational button is 
/*
buttons.forEach(function(items) {
	if (item.value === "C") {

	}
	else if (item.value === "=") {

	}
	else {
		return item.value
}
*/
//document.getElementById("button1").addEventListener("click", buttonPush1);

document.getElementsByClassName("button").addEventListener("click", buttonPush1)

function buttonPush1() {
	document.getElementById("result").innerHTML += 1
}

//add event handler to button1 click
// use document.getElementById on #button1 and add eventListener with action 'click' and function buttonPush1



