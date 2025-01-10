// main.js
const getGreaterNumber = require('./Compare_Two_Numbers');

const number1 = 42;
const number2 = 56;

const greaterNumber = getGreaterNumber(number1, number2);
console.log(`The greater number between ${number1} and ${number2} is: ${greaterNumber}`);
console.log("number1"); //To check what does it print