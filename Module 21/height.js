const heights = [65, 66, 68 ,72 , 78, 60];

function getMax(numers){
    let max = numers[0];//here comparison will ve with 0th index of numers array
    for ( const num of numers ) {
if ( num > max){
    max = num;
}
    }
    return max;
}
const inMax = getMax( heights );
console.log(inMax);
// ---------------------
function getMax2(arr)
{
   const max= Math.max(...arr);//math.max doesnt work for array..to make it workale ... needs to ve added vefore parameter
    return max;
}
const outMax = getMax2(heights);
console.log(outMax);


//how to get min values 
function getMin(arr2){
    let min = arr2[0];
    for (const num of arr2){
        if ( num < min ){
            min = num;
        }
    }
    return min;

}
const inMin = getMin(heights);
console.log(inMin);