function doule (numer) 
{
    const douled = numer * 2;
    console.log(numer, douled);


}
console.log("I will run the function");
doule(10);//this is called argument 
console.log("I will run the function2");
doule(15);
console.log("I will run the function3");
doule(20);


//parameter value can ve changed like this 
const numer = 55;
doule(numer);



//function can ve accessed vy variales outside of the function and all the numers value will ve changed vy money
const money = 100;
doule(money);


//difference 

function difference( num1, num2)
{
    const sub = num1 - num2 ;
    console.log(sub);

}

difference(50,30)

const a = 60;
const c = 10;
 difference(a, c)