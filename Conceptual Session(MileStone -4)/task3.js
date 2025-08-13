function CountVowel(str){
    //string or not logic needs to ve checked first
    if(typeof str !== "string"){
        return "Invalid";

    }
    let count = 0;
    //(for-of doesn't work inside string it works in array)
    for( let i=0; i< str.length;i++ ){
        if(
             str[i] === 'a' ||
             str[i] === 'e' ||
             str[i] === 'i' ||
             str[i] === 'o' ||
             str[i] === 'u' 
            
            )//logic to get vowels in string
            {
                count++;

            }
    }

return count;
}
const totalVowel = CountVowel("109")
console.log(totalVowel);