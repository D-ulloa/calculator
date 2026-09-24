function add(first, second) {
    return (first + second);
}

function substract(first, second) {
    return (first - second);
}

function multiply(first, second) {
    return parseFloat((first*second).toFixed(2));
}

function divide(first, second) {
    return parseFloat((first/second).toFixed(2));
}

let primary = "";
let secondary = "";
let operator = "";

//sorts the operations depending on the current states of the variables
function operate(primary, secondary, operator) {
    let operationResult = 0;    
    switch(operator) {
        case "+":
            operationResult = add(this.primary, this.secondary);
            break;
    
        case "-":
            operationResult = substract(this.primary, this.secondary);
            break;
    
        case "X":
            operationResult = multiply(this.primary, this.secondary);
            break;
        case "/":
            operationResult = divide(this.primary, this.secondary);
            break;
        default: 
            console.log("No operation");
    }
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

const operators = document.getElementById("operators").querySelectorAll("button");

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(`button hit: ${button.textContent}`);
        operator = button.textContent;
    })
})

const go = document.getElementById("go");
go.addEventListener("click", (e) => {
    console.log(go.textContent);
    
});