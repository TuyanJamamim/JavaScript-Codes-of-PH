let a = 5;
let c = 7;

console.log(a, c);
//  a = c;
//  c = a;
//  console.log(a, c)
const temp = a;
 a = c;
//  console.log(temp)...here only value of a will change...not the value of temp
c = temp;
console.log(a,c)

//--------------
let x = 5; 
let y = 7; 

console.log(x, y);
[x, y] = [y, x];//here is another way to swap values 
console.log(x, y);