const price = 500;

if (price >= 5000){
    const discount = 5000 * 10 /100;
    console.log("You get a discount of: " + discount);//concataning a string with a variable
    console.log("your final price is : " + (price - discount));
}
else if (price <= 3000) {
    const discount = 3000 * 5 / 100;//same variavle name can not be used in the same scope..this is different scope thats why discount is working here
    console.log("You have get a discount of: " + discount);
    console.log("Your final Price is : " + (price - discount));
}
else {
    console.log("You are not eligible for a discount");
}