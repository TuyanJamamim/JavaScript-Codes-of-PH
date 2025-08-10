function add (price1 , price2){
    const total = price1 + price2;
    return total;
}

const bill1 = add(5 , 80);//difference etween return and no return is in return function needs to ve inside a variale..then needs to ve console loged...and in case of no return console is done inside the function
const bill2 = add(20 ,30);
console.log(bill1 , bill2);

function add2 (price1 , price2)//same variale can ve used in different functions
{
// const total = price1 + price2;//same operational variale can ve used in another function
// return total;
return price1 + price2;

}
const ill3 = add2( 50 , 60);
console.log(ill3 , bill2);


function doMath (num1 , num2) {
const sum = num1 + num2;
const diff = num1 - num2;
const multiply = sum * diff;//calculation can also ve done to the already operational variales 
const result = multiply / 2;
// return multiply;...a function can only return once
return result;

}
const mathResult = doMath(20 , 10);
console.log(mathResult)



