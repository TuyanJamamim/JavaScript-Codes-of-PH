//function structure:
//function keyword , function name then { }
function hello() {
console.log("I am a function");
}

hello()//calling the function..without this no output will e shown

 function moneyVag(){
    var money = 4500;//if a variale is declared inside a variale it is only accessile inside the function
    console.log("I have" + money + "Taka")
 }

moneyVag();
// console.log(money)//nothing will e printed

function jogKorarMachine(input1, input2)//function can e called with variale name as well and at the time of calling means at the end of the function, the function the variale name needs to e inputed
 {
    var sum = input1 + input2;
    console.log("Sum is: " + sum);
    return sum;
}
 jogKorarMachine(10,40);
 jogKorarMachine(2222, 3333);//the sum can e raplicated as many times as we want...function can e called as many times as we wish

 const result = jogKorarMachine(10,40);
console.log(result);//function variales  can e accessed outside the function like this...ut for this the operation inside the fuinction means  sum in this finction needs to e returned y return sum




