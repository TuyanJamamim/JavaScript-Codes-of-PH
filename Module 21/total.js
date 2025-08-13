const products = [
    {name : "Shampoo" , price : 300 } ,
    {name : "chiruni" , price : 100 } ,
    {name : "Shirt" , price : 1200 } ,
    {name : "Pant" , price : 700 } 

]//multiple arrays and ojects can ve inside an array

function productValue( goods ){
    let sum = 0;
    for (const good of goods){
        sum = sum + good.price;

    }
    return sum;
}
const totalValue = productValue(products);
console.log("Ajke total khoshe:" ,totalValue);

