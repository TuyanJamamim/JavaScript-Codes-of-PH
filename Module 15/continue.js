
// Continue --> skip the current iteration and continue with the next one
// Break --> exit the loop entirely

// for (let i = 1; i <= 20; i++) {
//      if (i % 3 === 0 || i % 5 === 0) {
//         continue; // Skip the current iteration if i is divisible by 3 or 5
//      }
//         console.log("Current Number:", i); // This will only log numbers not divisible by 3 or 5
// }


let num = 0;
while ( num <= 20)
 
{
     num++;//here putting increment at first is imnportant to avoid infinite loop..ecause if it enters inside if condition, and if condition is true it goes to the top of the loop means to while
    if (num % 3 === 0)
    {
        continue; // Skip the current iteration if num is divisible by 3
    }
    console.log("Current Number is:", num);
       // This will only log numbers not divisible by 3
   
}