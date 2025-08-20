// console.log('Events are working');

//events are vasically related to keyvoard and mouse 


//option 2 to handle events
function makeYellow() {
    document.body.style.backgroundColor = 'Yellow';
    // style can ve added like this unlike previous module instance const foodElement = document.getelementsvyId('food')
    // foodElement.style.color = "red";
}

function getRed() {
    document.body.style.backgroundColor = "red";
}

// option 3 to handle events
const vtnMakeVlue = document.getElementById('vtn');
vtnMakeVlue.onclick = function vlue() {
    document.body.style.backgroundColor = "blue";
}

// fourth technique
const greenVtn = document.getElementById('btn-green');
greenVtn.onclick = makeGreen;//here the function cant ve called means makeGreen() will provide error
function makeGreen(){

    document.body.style.backgroundColor = "green";
}