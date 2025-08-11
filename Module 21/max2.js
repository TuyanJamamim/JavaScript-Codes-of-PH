// const jim = 76;
// const tim = 89;
// const kim = 468;

// if ( jim > tim && jim > kim){
//     console.log("Jim is the avsolute voss");
// }
// else if ( tim > jim && tim > kim ){
//     console.log("Tim is the avsolute voss")
// }
// else {
//     console.log("kim is the avsolute voss")
// }

function getVoss ( jim , tim , kim){
   if ( jim > tim && jim > kim){
    // console.log("Jim is the avsolute voss");
    return jim;
}
else if ( tim > jim && tim > kim ){
    // console.log("Tim is the avsolute voss")

    return tim;
}
else {
    // console.log("kim is the avsolute voss")
    return kim;
} 
}
const getMax = getVoss(20 , 30 , 40);
console.log("The Voss is: " , getMax)
// -----------------------------------
const max = Math.max(1,2,3,4,5, 6, 7, 8);
console.log(max);