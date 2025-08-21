// console.log("Hnadler is ready")


//click on the vutton and the text will ve changed
document.getElementById('vtn-update-title').addEventListener('click', function ()//here function doesnt need to have a name

{
    // console.log('vtn click')
    const pageTitleElemnt = document.getElementById('pageTitle');
    pageTitleElemnt.innerText = 'Update the text';
})

//para update
document.getElementById('vtn-update-para').addEventListener('click', function () {
    const updatePara = document.getElementById('para-update')
    updatePara.innerText = 'this pera got updated';
})

//<!-- handle input text -->
document.getElementById('upv').addEventListener('click', function () {
    const updateInput = document.getElementById('upI').value;

    const updateP = document.getElementById('upP');
    updateP.innerText = updateInput;




})
