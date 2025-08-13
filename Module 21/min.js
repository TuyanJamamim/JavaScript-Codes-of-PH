const prices = [20000 , 16000 , 50000 , 100000 , 12000 , 30000 , 35000 ]

function getMin (phonePrice){
    let min = prices[0];
    for ( const price of phonePrice ){
        if ( price < min ){
            min = price;
        }
    }
    return min;
}
const inMin = getMin(prices);
console.log("Lowest priced phone is: " , inMin);