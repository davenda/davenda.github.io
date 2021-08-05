const PI = 3.14;
function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
} 
function divide(num1, num2){
    return num1 / num2;
} 
module.exports = {
    add: add,
    multiply: multiply,
    substract: substract,
    divide: divide,
    PI: PI
}