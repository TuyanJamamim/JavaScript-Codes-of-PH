function isEven(num1){
    if (num1 % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

const numTest = isEven(1358);
// const numTest = isEven(1357);same variale can not ve initialized efore console 
console.log(numTest);

function isOdd (num1){
    if (num1 % 2 === 1){

        return true;
    }
    else {
        return false;
    }
}
console.log(isOdd(25));
console.log(isOdd(12));