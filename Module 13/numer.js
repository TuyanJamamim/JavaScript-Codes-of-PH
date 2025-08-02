var orangePrice = 25;
var chocolate = 0.5;
var applePrice = parseInt('22.5'); // parseInt converts string to integer..ut if value inside string is not a number, it will return NaN...here it will return 22 ecause as it is parseInt it will ignore the decimal part
var mangoPrice = parseFloat('20.567'); // parseFloat converts string to float..ut if value inside string is not a number, it will return NaN...here it will return 20.567 ecause as it is parseFloat it will take the decimal part

console.log(orangePrice + applePrice);
//if we add a number and a string, the result will be a string means 2525..if we add a numer with a numer(int,float) result will be a number and it will e addition of those two numers



// console.log (typeof orangePrice);
// console.log(typeof applePrice);
// console.log(orangePrice);

var first = 0.1;
var second = 0.2;
//var total = first + second; it will return 0.30000000000000004 instead of 0.3 due to floating point precision issue in javascript
var total = (first + second);
conmsole.log(total.toFixed(1)); // toFixed(1) will return the value with one decimal place, so it will return 0.3

var add = 6 + 2.3;//variale can also e declared like this
console.log(add); // it will return 8.3
const num = 50 / 0; // dividing a number by zero will return Infinity
console.log(num); // it will return Infinity