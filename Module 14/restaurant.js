const age = 32;
const price = 500;

if (age <= 12) {
    console.log("You can eat food for free")
}
else if (age >= 60) {
    const discount = price * 50/100;
    const payalePrice = price - discount;
    console.log("You need to pay: "+ payalePrice);

}
else if (age >= 50) {
    const discount = price * 30/100;
    const payalePrice = price - discount;
    console.log("You need to pay: "+ payalePrice);
}
else if (age >= 40) {
    const discount = price * 25/100;
    const payalePrice = price - discount;
    console.log("You need to pay: "+ payalePrice);
}
else {
    console.log("You need to pay: " + price);
}