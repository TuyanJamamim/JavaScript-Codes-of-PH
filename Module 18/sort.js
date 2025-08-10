const numers = [6 ,1 , 8, 2 , 3, 5];
console.log(numers);
numers.sort();//array elements will e sorted from 1 to 8
console.log(numers);


const friends = ['shaki' , 'noki' , 'aki' , 'raki' , 'caki'];
 friends.sort();//sorts alphabetically
console.log(friends);

const ages = [1, 5, 100, 15, 8, 2]
ages.sort();
console.log(ages);//here the result will e 1 then 100 then 2 ecause it compares the first character with others at first...and javascript compares through string

// solution:
//ascending(this means small value to larger value)
const sorted_ages = ages.sort(function (a ,b) {return a -b});//1,2,5,8,15,100
console.log(sorted_ages);
//descending
const sorted_ages_desc = ages.sort(function (a,c) {return c -a} );//100,15,8,5,2,1
console.log(sorted_ages_desc);









