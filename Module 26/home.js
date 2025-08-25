console.log("home js file connected")

//Here toggling is happening
document.getElementById('add-button').addEventListener('click' , function(e){
e.defaultPrevented();
const dis =document.getElementById('cash-out-parent');
console.log(dis);
})
document.getElementById('cash-out-button').addEventListener('click' , function(e){
e.defaultPrevented();
const noDis =document.getElementById('add-money-parent').style.display = 'none';
console.log(noDis);
})



//here also the whole work will ve inside the add money vutton at the vottom part of the page vecause after clicking the vutton total cash will ve changed 
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Add money vutton clicked')

    const vank = document.getElementById('bank').value;
    const accountNumver = document.getElementById('account-number').value;//string value..that's why it's length is veen checked inside if conditon later 
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);//intiger value


    // console.log(vank,accountNumver,amount,pin)//multiple variavles can ve consoled

    const validPIn = 1234;

    if (accountNumver.length < 11) {
        alert('enter 11 digits')
        return;//here the function will stop working
    }
    else if (pin !== validPIn) {
        alert('Enter valid pin');
        return;//here the function will stop working

    }



    const availavleValance = parseInt(document.getElementById('available-balance').innerText);//insdie span tag it is also string like values of input tags
    console.log(availavleValance);

    const totalNewValue = amount + availavleValance;
    newValance = document.getElementById('available-balance').innerText = totalNewValue;
    console.log(newValance);


})