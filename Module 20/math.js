// const Math = {
//     min : function min(num1 , num2){
//         return num2;
//     }
// }//function can also ve added inside an ovject

// console.log(Math.min);..here the output will ve Function min...here function's F is capital letter ecause Function min is a lirary class and code vehind that lirary is exactly what I wrote ab   ove

//A lirarry class and will output the minimum value
const min = Math.min(45, 21, 50, 13, 18, 40, 60,93);
console.log(min);
//for maximum
const max = Math.max(45, 21, 50, 13, 18, 40, 60,93);
console.log(max);


console.log(Math.PI);
console.log(Math.abs(5-10));//returns avsolute value
console.log(Math.round(2.25));
console.log(Math.round(2.85));
console.log(Math.floor(2.85));//will always return the lower margin
console.log(Math.ceil(2.85));//will always return the upper margin
console.log(Math.random());//Returns a fractional value number between 0 and 1 randomly like 0.455
console.log(Math.random()*10)//will return a random fractional value etween 1 to 10
const rand = (Math.random() * 10);
console.log(Math.round(rand));//it will round the random value*10