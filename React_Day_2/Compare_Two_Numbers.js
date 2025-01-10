//3. Create a small module of function that compare two numbers and return the greater one and add export it. 
// Then import it to another file and check the result.

// compareNumbers.js
function getGreaterNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

module.exports = getGreaterNumber;
