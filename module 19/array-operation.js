// ojective : write a function to give me the sum of all numers in an array 
function sumArray (arr1 ){
let sum = 0;
    for (let i = 0; i < arr1.length; i++ )
    {
sum = arr1[i] + sum;

// return sum;//if return is inside the loop then it will return only one value and the loop ends there 
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]))


//doing it vy for of 

function addArray (array2){
    let sum = 0;
    for (const num of array2){
        console.log(num);
        sum = num + sum;
    }
    return sum;
}
const arrayAdd = addArray([1,2,3,4,5]);
console.log(arrayAdd);