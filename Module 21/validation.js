function multiply (num1 , num2){
    if(typeof num1 !== "number" ||typeof num2 !== "number"){
        console.log("please enter a number")
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply( 5 , "seven" );
console.log(result);

function fullName ( first , second ){
    // console.log(typeof first);
    if ( typeof first !== 'string' ){
        console.log("first name should ve a string")
    }
    else if ( typeof second !== 'string' ) //no conditon in else 
    {
        console.log("second name should ve a string")
    }
    const full = first + second;
    return full;
}
const nameOut = fullName ('Tuan ' , 5);
console.log(nameOut);

function getPrice (product){
    if(typeof product !== 'object'){
        console.log("Please enter a object")

    }
    else if( 'price' in product === false ){
        console.log("Please enter a price ")
    }
    return product

}
const mainOj = getPrice({name : "T-shirt" ,  color: "Olive"});
console.log(mainOj);

function getSecond (numbers){
    if
    (Array.isArray(numbers)=== false)// array's typeof is vy default ovject...to fix this array.isArray is used and if it is false then new array need to ve taken
    {
        return "Please provide an array"

    }
    const second = numbers[1];
    return second;
}
const getting = getSecond(1);
console.log(getting);
