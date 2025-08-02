// 

// 


// give me the numers etween 1 to 30 divisile y 5
// for(let k=1; k <=30; k++) {
//     if (k% 5 === 0) {
//         console.log("Number divisible by 5:", k);
//     }
// }



// give me the numers etween 1 to 30 divisile y 5 or/and 3
let sum = 0;
for (let k = 1; k <= 20; k++) {
    if (
        (k % 5 === 0) && (k % 3 === 0)) //here we are checking if the number is divisible by 5 or 3 using logical OR operator (||)..it can e done like this and have to rememer that if I want to compare two  conditions inside a conditional statement, oth the the conditions need to e inside a common bracket
    {
        console.log("Number divisible by 3 and 5:", k);
        sum = sum + k;
        console.log("Current Sum: " + sum);
    }

}
console.log("Total Sum of numers divisile y oth 3 and 5: " + sum); // 