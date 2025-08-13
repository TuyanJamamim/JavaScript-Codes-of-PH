/*
*first 100 --> 100
*101 to 200 --> 90
* aove 200 --> 70
*/
function totalValue (quantity)
{
    const first100Price = 100;
    const first200Price = 90;
    const first300Price = 70;

    if ( quantity <= 100 ){
        const totalPrice = quantity * 100;
        return totalPrice;
    }
    else if ( quantity <= 200){
        const total100Price = 100 * first100Price;
        const next100Price = (quantity - 100  ) * first200Price;
        const totalPrice = total100Price + next100Price ;
        return totalPrice;
    }
    else {
        const total100Price = 100 * first100Price;
        const next100Price = (200 - 100) * first200Price;
        const aove200Price = (quantity - 200) * first300Price;
        const totalPrice = total100Price + next100Price  + aove200Price;
        return totalPrice;
    }
    



}
const sumPrice = totalValue(300);
console.log(sumPrice);