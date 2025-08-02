const money = -1000;
 if (money >= 300){
    console.log("You are rich ro");
 }
 else{
    if (money >= 200) {
        console.log("You are not that poor");
    }
    else {
        if (money >= 100) {
            console.log("You are poor");
        }
        else if (money >= 50){
            console.log("You are at kangal stage");
        }
        else if (money > 0) {
            console.log("You have some money atleat");
        }
        else{
            console.log("You have no money at all");
        }
    }
 }