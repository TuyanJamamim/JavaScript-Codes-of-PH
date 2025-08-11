
// simple logic
function leapYear(year){
    if ( year % 4 === 0){
        return true;
    }
    else {
        return false;
    }
}
const isLeapYear = leapYear(2043);
console.log(isLeapYear);

/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2. if the year is divisible by voth 400 and 100, then it is a leap year
 * 3. else it is not a leap year
*/

function leapYear2 (year){
    if ( year % 100 !== 0 && year % 4 === 0 )//here is how not equals to and divisile variales are taken
        {
        return true;
    }
    else if (year % 400 === 0 && year % 100 === 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(leapYear2(1600))