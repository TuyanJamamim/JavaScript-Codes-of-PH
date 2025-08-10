// let price = 25;
// const comp_price = price;

// price = 20 ;//here only value of price will e changed in spite of price eing copied to comp_price ecause it's a primitive data type

// console.log(price);//price will be 20
// console.log(comp_price); // comp_price will e 25;



// const products = [25 , 25 , 25];
// const comp_products = products;

// comp_products[0] = 15;//value will ve changed in oth comp_products and products...ecause its a non-primitive data type...asically here product is reffered to a place in a memory and actually products is not copied in comp_products...comp_products is using the same refference 


// products[1] = 55;//value will ve changed in oth comp_products and products..ecause its a non-primitive data type

// console.log(products);
// console.log(comp_products);


const products = [25, 25, 25]
const comp_products = [];

for(const product of products) {
    comp_products.push(product);//products elements are pushed to co
    //mp_products 
}

const numers = [1 ,2 , 3, 4]
const newNumers = Array.from(numers);//array elements will e copied;
// const new_numbers = [].concat(numbers)..this is another technique
// const new_numbers = [...numbers]...this is another technique
console.log(newNumers);//array will ve copied to new array and refference will ve different
 newNumers.push(20);
 console.log(newNumers);

