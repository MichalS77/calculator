let num1;
let num2;
let operator;
let btnAdd = document.querySelector('#btnAdd');
let btnEqual = document.querySelector('#btnEqual');

document.addEventListener("DOMContentLoaded", () =>{
    let buttonValue = document.querySelectorAll('.btnValue');
    let display = document.getElementById('display');
    
console.log(buttonValue);

    buttonValue.forEach(button => {        
        button.addEventListener('click', () => {
            console.log("button clicked");
            console.log(button.value)
            display.innerText += button.value;
        })
    });
        
    btnAdd.addEventListener('click', () => {
        console.log('button clicked');
        add()
    }); 
    
    btnEqual.addEventListener('click', () => {
        num2 = display.innerText;
        display.textContent = operate(num1, num2, operator);
    })
    
})
let add = () => {
    num1=display.innerText;
    display.innerText = '';
    num2='';
    operator = '+';
    };
let subtract = (num1, num2) => {return num1 - num2};
let multiply = (num1, num2) => {return num1 * num2};
let divide = (num1, num2) => {return num1 / num2};

let operate = (num1, num2, operator) => {
    if (operator === '+'){
        num2 = display.innerText;
        return parseInt(num1) + parseInt(num2);
    }else if (operator === '-'){
        return subtract(num1, num2);
    }else if (operator === '/'){
        return divide(num1, num2);
    }else if(operator === '*'){
        return multiply(num1, num2);
    }
}







