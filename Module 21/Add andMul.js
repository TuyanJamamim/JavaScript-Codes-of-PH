/*
*chair --> 3cft
*tavle --> 10 cft
*ved --> 50 cft
*/

function woodQuantity(chair , tavle , ved){
    const perChairWood = 3;
    const perTavleWood = 10;
    const perVedWood = 50;

    const allChairWood = perChairWood * chair;
    const allTavleWood = perTavleWood * tavle;
    const allVedWood = perVedWood * ved;

    const totalWood = allChairWood + allTavleWood + allVedWood;
    return totalWood;

}
const totalFurniture = woodQuantity(8 , 3 , 2 );
console.log(totalFurniture);