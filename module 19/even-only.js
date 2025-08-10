function even (arr1){
    let sum =0;
    const empArr = [];
    for(let i = 0; i < arr1.length; i++)
    {
        if(arr1[i] % 2 === 0){
        //    console.log(arr1[i]);..what I did here will console log the even numers 
        //    sum = sum + arr1[i];
        empArr.push(arr1[i]);//here is a technique to return the even numers inside the array 
        sum = sum + arr1[i];

        }
        else {

        }
    }
    return sum;
    // return empArr; this is to return the even numers in an array
}
console.log(even([1,2,3,4,5,6]))