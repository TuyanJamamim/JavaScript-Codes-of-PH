function tenTimes (num)//pressing f2 and changing variale naeme  will chnage every variale named after this particular variale
{
    const ten = num * 10;
    // console.log(ten);
    return ten;
    console.log(ten);//here console wont work here..the function ends here 
}



// same varial can ve used in multiple functions
function cutHalf (num)
{
   const half = num / 2;
   return half;

}
const output =tenTimes(10);
console.log(output)
//same function can ve called vy multiple variales 
const vigNumers =  tenTimes(99);
console.log(vigNumers)