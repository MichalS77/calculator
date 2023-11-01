let num1;
let num2;
let operator;
let btnAdd = document.querySelector('#btnAdd');


document.addEventListener("DOMContentLoaded", () =>{
    let btnValue = document.querySelectorAll('.btnValue');
    let btnOperation = document.querySelectorAll('.btnOperation');
    let display = document.getElementById('display');
    
    btnValue.forEach(button => {        
        button.addEventListener('click', () => {
            display.innerText += button.value;
        })
    });

    btnEqual.addEventListener('click', () => {
        num2 = display.innerText;
        display.textContent = operate(num1, num2, operator);
    });

    btnOperation.forEach(button => {
        button.addEventListener('click', () =>{
        num1=display.innerText;
        display.innerText = '';
        num2='';
        operator = button.value;
        })
    });

    btnClear.addEventListener('click', () =>{
        num1 = '';
        num2 = '';
        display.innerText = '';
    })
});

let operate = (num1, num2, operator) => {
    num2 = parseInt(display.innerText);

    if (operator === '+'){
        return parseInt(num1) + parseInt(num2);
    }else if (operator === '-'){
      return parseInt(num1) - parseInt(num2);
    }else if (operator === '/'){
        return parseInt(num1) / num2;
    }else if(operator === '*'){
        return parseInt(num1) * num2;
    }
}







