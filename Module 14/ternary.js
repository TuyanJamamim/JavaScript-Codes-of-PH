/**
 * TERNARY --> three parts
 * 
 *   ?    :
 * 
 *  condition ? do something when true : do something when false
*/

 const age = 20;
//  if ( age >= 18) {
//     console.log("You can vote");
//  }
//  else {
//     console.log("You can not vote");
//  }

//Turning the above if-else into a ternary operator
// simple ternary operator
// age >= 18 ? console.log("You can vote") : console.log("You can not vote");
let price = 500;//const means constant and it can not be changed ut let can be changed
// price = 600; // updating price
const isLeader = true; 

if (isLeader === true)//it's good practice to use strict equality operator === for boolean and string values
    {
    price = 0;

}
else {
    price = 500+100;
}
console.log("You need to pay: " + price);//this console.log will e considered as a part of the if-else block and applicale for both the conditions/scopes...this tecnique need to e remerembered

//Turning the above if-else into a ternary operator
isLeader === true ? price = 0 : price = 500 +100;
console.log("You need to pay: " + price);

// OPTIONAL: semi-advanced ternary

if(isLeader === true){
    if(price > 1000) {
        price = price /2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}


// Feel free to ignore this one
// price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
price = isLeader === true ? 
            price > 1000 ? 
                price /2 : 0 
        : price + 1000;