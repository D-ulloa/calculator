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

let primary = 0;
let secondary = 0;
let operator = null;

function operate(primary, secondary, operator) {
    let operationResult = 0;    
    switch(operator) {
        case add:
            operationResult = add(this.primary, this.secondary);
            break;
    
        case substract:
            operationResult = substract(this.primary, this.secondary);
            break;
    
        case multiply:
            operationResult = multiply(this.primary, this.secondary);
            break;
        case divide:
            operationResult = divide(this.primary, this.secondary);
            break;
        default: 
            console.log("No operation");
    }
}
