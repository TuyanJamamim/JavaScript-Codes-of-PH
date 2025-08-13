const moiles = [
{name : 'Samsung' , price :120000 , camera : "12mp" , color : "titanium gray" } ,
{name : 'Iphone' , price :150000 , camera : "12mp" , color : "titanium gray" } ,
{name : 'Mi' , price :20000 , camera : "12mp" , color : "titanium gray" } ,
{name : 'Oppo' , price :40000 , camera : "12mp" , color : "titanium gray" },
{name : 'Vivo' , price :700000 , camera : "12mp" , color : "titanium gray" }


]

function getMin (phones ){
    let min = moiles[0].price;
    for (const phone of phones ){
        if 
        ( min > phone.price )
        // ( min < moiles.price )...here this doesnt work vecause voth of them are ojects and we can not compare ojects with ojects..here another mistake I have made is I tried to access the ojects vy array name like moiles.price...in stead I will have to access array element first and then call the oject element with array element like in this case: phone.price
        {
            min = phone.price;
        }
    }
     return min;
}
const inMin = getMin(moiles);
console.log(inMin);