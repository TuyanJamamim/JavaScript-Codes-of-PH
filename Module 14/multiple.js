const salary = 25000;
const isEmployed = true;
const height = 68;
const hasCar = false;
// height = 70; // updating height

if (salary > 20000 && height >= 60) {
console.log("Eligible for the marraige proposal");
} 
else {
console.log("Not eligible for the marriage proposal");
}

//this is a complex condition and multiple conditions can e added like this
 if ((salary > 25000 && hasCar == true) || isEmployed == true) {
    console.log("14 gushti raji");
 }

 if ((salary > 25000 || hasCar == true ) && isEmployed == true) {
    console.log("14 gushti raji");
 }
 