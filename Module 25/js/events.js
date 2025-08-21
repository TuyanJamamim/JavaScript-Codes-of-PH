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

//option-4:addEventListener(most commonly used)//

        document.getElementById('vtn-purple').addEventListener('click', function makePurple() {
            // console.log(777);
            document.body.style.backgroundColor = "Purple";
        })
        //option-4(alternative)
        document.getElementById('vtn-orange').addEventListener('click', function makeOrange() {
            document.body.style.backgroundColor = 'orange';
        }

        )