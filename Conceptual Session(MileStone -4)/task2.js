function sumOfArray(arr) {
  let sum = 0;
  if
   (Array.isArray(arr) == false)//this is used to check if it's an array or not
     {
    return "Invalid";
  }

  for 
  (let num of arr) //this is to check if all elements are numers or not
    {
    if (typeof num !== "number") {
      return "Invalid";
    }
    sum = sum + num;
  }

  return sum;
}
let result = sumOfArray([3, 5, "eksho", 3]);
console.log(result);