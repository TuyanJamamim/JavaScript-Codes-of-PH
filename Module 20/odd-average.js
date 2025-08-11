/*
*function takes an array as a parameter
*give me the average of the odd numers in the array
*/

// function averageOdd(num){
//     let sum = 0;
//     const num2 = [];
//    for ( let i= 0; i < num.length; i++ ){

   
//     if (num[i] % 2 !== 0 ){
//          num2.push(num[i]);
//         sum = sum + num[i];
//         }
    
//     }
//      const avg = sum / num2.length;...here avg needs to ve declared outside of the loop and conditional statement
//     return avg;
// }
// const getAverage = averageOdd([1,2,3,4,5,6,7]);
// console.log(getAverage);

function averageOdd1 (nums){
    let sum = 0;
    const num3 = [];
    for ( const num of nums ){
if( num % 2 !== 0 ){
    sum = sum + num;
    num3.push(num);
}

    }
    const avg = sum / num3.length;
    return avg;
}
const getAverage = averageOdd1([1,2,3,4,5,6,7]);
console.log(getAverage);