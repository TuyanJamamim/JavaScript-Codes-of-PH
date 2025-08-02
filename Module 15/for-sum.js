let sum = 0;//sum variale needs to e defined before the loop

for (let i = 11; i <= 20; i++) {
    sum = sum + i;
    console.log("Current Sum: " + sum);

}
console.log("Total Sum: " + sum); // Output the total sum....after the loop ends the final value of sum is printed...this is a technique needs to e rememered
console.log("Final Numer: " + i); // Output the final value of i after the loop ends...ut i is not defined outside the loop, it will throw an error if you try to access it here.