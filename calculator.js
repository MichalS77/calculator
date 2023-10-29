let  num1;
let num2;
let operator;

let add = (num1, num2) => {return num1 + num2};
let subtract = (num1, num2) => {return num1 - num2};
let multiply = (num1, num2) => {return num1 * num2};
let divide = (num1, num2) => {return num1 / num2};

let operate = (num1, num2, operator) => {
    if (operator === '+'){
        return add(num1, num2);
    }else if (operator === '-'){
        return subtract(num1, num2);
    }else if (operator === '/'){
        return divide(num1, num2);
    }else if(operator === '*'){
        return multiply(num1, num2);
    }
}



