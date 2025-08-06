const numers = [1, 2, 3, 4, 5];

const reversed = [ ]


// Technique 1 
// for (let i =0; i < numers.length; i++)
// {
//     console.log(numers[i]);
//     reversed.unshift(numers[i]);//here reverse is an empty array and unshift adds elements at the start of the array...so 1 will e added first and 2 will e added infront of 1 and 3 will e added infront of 2 and the process goes on
// }

// Technique 2

for ( let i = numers.length -1 ; i >= 0; i-- )// here the regular loop is running on a reverse order and i is initialized y sustracting 1 from the length ecause total indexes are 1 less than the length of the array ecause index starts from 0

{
    console.log(numers[i])
    reversed.push(numers[i]);
}

console.log(reversed);



//simple technique
console.log(numers)
numers.reverse();//reverse() is a method to reverse the array
console.log(numers);//now the array is reversed and we can put numers.reverse in a variale
