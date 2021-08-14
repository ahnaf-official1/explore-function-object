// add two numbers

function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum; 
} 

var firstNumber = 24;
var secondNumber = 80;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value: ', result);

// Subtraction

function subtractTwoNumbers(num1, num2){
    console.log(num1, num2);
    var result  = num1 - num2;
    return result;
}

var total = subtractTwoNumbers(10, 50);
console.log('total: ', total);

// Multiplication

function multiplyTwoNumbers(digit1, digit2){
    console.log(digit1, digit2);
    var product = digit1 * digit2;
    return product;
}

var total = multiplyTwoNumbers(200, 400);
console.log('product:', total);

// Division

function divideTwoNumbers(firstNum, secondNum){
    console.log(firstNum, secondNum);
    var quotient = firstNum / secondNum;
    return quotient;
}

var total = divideTwoNumbers(7000, 2);
console.log('quotient', total); 




