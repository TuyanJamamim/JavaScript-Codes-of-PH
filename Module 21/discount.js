/*
* upto 100 :---> 100tk per piece(no discount)
* more than 100: ---> 90tk per piece(10% discount)
*more than 200:----> 70tk per peice
*/
 function getDiscount (quantity){
     if ( quantity <= 100 ){
        const total = quantity * 100; 
        return total;
     }
     else if ( quantity <= 200){
        const toatal = quantity * 90;
        return toatal;
     }
     else{
        const total = quantity * 70;
        return total;
     }
 }
console.log(getDiscount(100));