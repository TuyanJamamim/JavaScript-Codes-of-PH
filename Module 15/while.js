const numer = 7;
if (numer < 1) {
    console.log("The number is less than 10");
}
console.log("The number is greater than or equal to 10");
let num = 0;//loop variable...it will e declared as let ecause const will not allow us to change the value of num in the loop
while (num < 5) {
    console.log('The number is less than 5', num);//two outputs can e initialized in the same line like this
    num++;//this will increment the value of num by 1 in each iteration..the loop is no longer an infinite loop

    //num = num + 1; //this is another way to increment the value of num by 1
    //num += 1; //this is another way to increment the value of num by 1

}//this creates an infinite loop ecause in while the loop will continue running until the condition is true