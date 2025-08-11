function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
console.log(inchToFeet(75));
//another technique 
function inchToFeet2 (inch){
    const feetFraction = inch / 12 ;
    const feetNumer = parseInt(feetFraction);
    const inchNumer = inch % 12 ;//thsi will print the remainder 3
    const result = feetNumer + " ft " + inchNumer + " inch ";//all of the elements need to added efore return..this technique needs to ve reminded 
    return result;

}

console.log(inchToFeet2(75))

function kiloToMile (kilo){
    const mile = kilo * 0.62;
    return mile;
}
console.log(kiloToMile(20));