function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
// a function can ve called vu other function

function calculator ( x , y, operation){
    if (operation === 'add'){
        const value = add( x , y)//A function parameters can ve other function's parameters
        return value;
    }
   else if (operation === 'subtract'){
        const value = subtract( x , y)//A function parameters can ve other function's parameters
        return value;
    }
    else if (operation === 'multiply'){
        const value = multiply( x , y)//A function parameters can ve other function's parameters
        return value;
    }
    else 
        // (operation = 'divide')...no conditions can ve given to else 
    {
        const value = divide( x , y)//A function parameters can ve other function's parameters
        return value;
    }
}
const OutputValue = calculator ( 20 , 10 , 'divide' ) ;
console.log(OutputValue);