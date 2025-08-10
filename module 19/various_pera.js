function checkLength (word1){
    if (word1.length % 2 === 0 ) {
        return "Even size";
    }
    else {
        return "Odd size";
    }

}

console.log(checkLength('Tuan'));
console.log(checkLength('jamamim'));

function douleOrTriple(num , doDoule ){
    if (doDoule)//this means doDoule === true;
        {
            const result = num * 2;
            return result;


    }
    else {
        const result = num * 3;
        return result;
    }
}
console.log(douleOrTriple(5 , true));
console.log(douleOrTriple(5 , false));

function elements (newArray ){
    const len = newArray.length;
    return len;
}
console.log(elements([1, 2, 3, 4,5 ]));

function ojects (person ){
    const personName = person.nam;
    return personName;
}
const returnName = ojects({ nam: 'Tuan', age: 25 });//here oject name is person
console.log(returnName);
