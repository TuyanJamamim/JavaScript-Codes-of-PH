const numers = [ 1,2, 3, 54, 4];
const players = [ {}, {}, {} ];
const employees = [
    {name:'atik', designation: 'Develpper' , salary: 29000 },
    {name:'rahim', designation: 'Digital Marketer' , salary: 21000 }//property name can e repeated
    
]
console.log(employees[0]);//full oject at at index 0 will e printed;
console.log(employees[1].designation);//value at index 1.designation will e printed;
 employees[0].name = "Ashraf";//first oject name of index 0 is changed to ashraf
 console.log(employees[0]);


// for (const employee of employees){
//     // console.log(employee);//the whole employees array will e printed like loop in a normal array
//     console.log(employee.salary , employee.designation);//salary and designation of each oject will e printed tuan is a 
// }

for (const emp of employees)
{
 const person = emp;

 const personInfo = ( person.name + " " + person.salary );
 console.log(personInfo);



}

//  for (const empl of employees)
//  {
//     console.log(empl);
//  }

//  console.log(employees);
