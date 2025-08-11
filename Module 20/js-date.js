// const today = new Date();//todays Date
// const date = new Date("2062-10-09");
// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDay());//Thsi uses array to find date and month...here index numers are printed
// const specificDate = new Date( 2091, 0 , 26)
// console.log(specificDate);


const today = new Date();
const date = new Date('2062-10-19')
console.log(date.getMonth());//here month index will ve printed
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26)//here at index 0 the first month is set
console.log(specificDate)
specificDate.setMonth(10);//here index 10 and month 11
specificDate.setDate(21);//here date is fix to the index numer means index 21 and value 21
console.log(specificDate.toLocaleString('en-GB'));//this will print as great britain style..this is the style by toLOcaleString

// unix epoc