const fruits = ['Apple' , "anana" , "anar" , "Watermelon" , "Dav" , "taal"  ]

for( i=0; i< fruits.length; i++)//here the comparison will e with array length ecause if we define the value y ourself there is a chance that we can get undefined values in return 
{
    console.log(i);
    console.log(fruits[i]);//here's the way to call array elements through loop
}

// for ( fruit of fruits) {
//     console.log(fruit);
// }

const numers = [ 1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10]
for (let j=0; j < numers.length; j++ )
{
    // console.log(j);
    console.log(numers[j]);
}

let k=0;
while( k< fruits.length)
{
    console.log(fruits[k]);
    k++;
}