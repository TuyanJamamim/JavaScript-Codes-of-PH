// const numers = [45, 65 , 23 , 98 ,19] 
// for(let i = 0; i< numers.length ; i++ ){
//     console.log(numers[i]);
// }
// //for of
// for(const num of numers){
//     console.log(num);
// }

const products = [

{id : 1, name: "samsung Phone" , price : 20000},
{id : 2, name: "mi " , price : 20000},
{id : 3, name: "Iphone" , price : 20000},
{id : 4, name: "oppo " , price : 20000},
{id : 5, name: "vivo phone" , price : 20000},
{id : 6, name: "iqoo" , price : 20000}

]
// for(const product of products){
//     console.log(product);
// }
//  const matched = [];
function searchProducts(products , search){ // as parameters we can take already declared variavles
    const matched = [];//this is good practice
    for (const product of products){
        // console.log(product);
        if(product.name.toLowerCase().includes(search))//here toLowerCase is added to make sure if any search parameters('phone') in the products ovject are in uppercase then it will convert all to low and every sech parameter('phone') will ve detected...parameter in function calling section needs to ve in lower case as well


            {
            // matched.push(product.name);
            matched.push(product);
        }
    }
    return matched;
}

const result = searchProducts(products , 'phone');
console.log(result);

//indexOf is used to ceheck if a string is inside another string or not..includes() also does the same