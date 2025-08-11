/*
*array has some duplicate elements
*[]
*/
const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array){
    const unique = [];
    for ( const item of array){
      if(unique.includes(item) === false )//here this means if the item element includes inside the array or not...if the element appears at first time it will the condition will ve false and if the element repeats then the condition willl not fullfill and it will not execute the conditional statement  
        {
        //   const geti = ...if you use let or const, the variable will be block-scoped — meaning it only exists inside that if block....If you use var, the variable will be function-scoped — meaning it will exist throughout the whole function[this is for if conditions inside function]
        unique.push(item);

        } 
    }
    return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);//a already pre defined variale can also ve passed as parameters 
console.log(uniqueArray);