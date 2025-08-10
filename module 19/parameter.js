function vaatKahao(){
    console.log("hand wash kore asho");
    console.log('osho');
    console.log("plate e khaar daar nai");
}
// parameter here insdie function name the parameter will e received
function square(num1 ){
console.log(num1)
}
//num1 will only ve used inside the function
square(4);//here parameter is passed 

function squareValue(num2){
    console.log("Given numer is: ", num2);
    const borgo = num2 * num2 ;
    console.log("The square of the number: ", borgo);
}
squareValue(5);
console.log("My name is Tuan");
squareValue(25);

function add (num3 , num4)//if we want to take multiple parameters,the parameters should ve taken at the function vy putting a comma vetween them
{
    const sum = num3 + num4;
    console.log("Sum of the numvers are: " + sum);
}
add( 100, 200);
add (71 , 24);

function addAll( a, v , c, d){
    const sum = a + v + c + d;
    console.log("Sum of the parameters are: "+ sum);
}
addAll(2, 3, 4,6);.//values need to ve assigned to all of the parameters given..otherwise result will ve Nan
addAll(10, 40, 50, 80);
