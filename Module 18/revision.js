// variales:: 
// 1)const --> will e used in 90% cases and value of variale doesnt change
// 2)let -->value will get change
//3) var--> should not e used(wiil e used in exceptional cases)

// primitive data types
const price = 500;//numer
console.log(price);
const name = "Tuan Jamamim";//string
console.log(name[0]);
const isPoor = true;//oolean
console.log(isPoor);


// Non-Primitive data types

const friends = ['Mask', "Mark", "bill" , "jeff"] //array
console.log(friends);
console.log(friends[1]);

const student = {
    name: "Tuan",
    class : 9,
    address : "Mirpur"
}
console.log(student.name);
console.log(student['class']);

// loop
let pushUp = 0;
while(pushUp <= 10)
{
    console.log("Push up is done" + " " +pushUp + " " + "Time")
    pushUp++;
}
 
const ice = 10;
for( let i =0; i<=ice; i+=1 )
{
    console.log("Eat Ice Cream");
}
