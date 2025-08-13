const products = [
    {name : "Shampoo" , price : 300 , quantity : 2 } ,
    {name : "chiruni" , price : 100 , quantity : 3 } ,
    {name : "Shirt" , price : 1200 , quantity : 5 } ,
    {name : "Pant" , price : 700 , quantity : 1 }
] 
function shoppingCart (goods) {
    let sum = 0;
for (const good of goods ){
sum = sum + ( good.quantity * good.price); 
}//If a variale is called inside a loop then it can not ve used outside the loop vut if it has a connection with any variale outside the loop then it will work
return sum;

}
const getTotal = shoppingCart (products);
console.log(getTotal);