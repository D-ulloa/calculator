function add(first, second) {
    return (Number(first) + Number(second));
}

function substract(first, second) {
    return (Number(first) - Number(second));
}

function multiply(first, second) {
    return parseFloat((Number(first)*Number(second)).toFixed(2));
}

function divide(first, second) {
    return parseFloat((Number(first)/Number(second)).toFixed(2));
}

let primary = "";
let secondary = "";
let operator = "";

let rawResult = 0;

//sorts the operations depending on the current states of the variables
function operate(primary, secondary, operator) {
    let operationResult = 0;    
    switch(operator) {
        case "+":
            operationResult = add(primary, secondary);
            break;
    
        case "-":
            operationResult = substract(primary, secondary);
            break;
    
        case "X":
            operationResult = multiply(primary, secondary);
            break;
        case "/":
            operationResult = divide(primary, secondary);
            break;
        default: 
            console.log("No operation");
    }
    return operationResult;
}

const numbers = document.getElementById("numbers");
const button_numbers = numbers.querySelectorAll("button");
console.table(button_numbers);

button_numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log("me han clickao" + button.textContent);
        
        if(operator == "") {
            primary += button.textContent;
            console.log(`primary: ${primary}`);
        } else {
            secondary += button.textContent;
            console.log(`secondary: ${secondary}`);
        }
    })
})



//operator setter
const operators = document.getElementById("operators").querySelectorAll("button");

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (operator == "") {
        console.log(`button hit: ${button.textContent}`);
        operator = button.textContent;
        } else {
            rawResult = operate(primary, secondary, operator);
            console.log(rawResult);
            operator = button.textContent;
            primary = rawResult;
            secondary = "";
        }
    })
})

//Go function activator
const go = document.getElementById("go");
go.addEventListener("click", (e) => {
    console.log(go.textContent);
    if(primary != "" && secondary != "") {
    rawResult = operate(primary, secondary, operator);
    console.log(rawResult);
    }
});