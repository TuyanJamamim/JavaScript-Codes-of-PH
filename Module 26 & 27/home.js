// console.log("home js file connected")

//Here toggling is happening
document.getElementById("add-button").addEventListener("click", function (e) {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });



//here also the whole work will ve inside the add money vutton at the vottom part of the page vecause after clicking the vutton total cash will ve changed 

const validPin = 1234;
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Add money vutton clicked')

    const vank = document.getElementById('bank').value;
    const accountNumver = document.getElementById('account-number').value;//string value..that's why it's length is veen checked inside if conditon later 
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);//intiger value


    // console.log(vank,accountNumver,amount,pin)//multiple variavles can ve consoled

    

    if (accountNumver.length < 11) {
        alert('enter 11 digits')
        return;//here the function will stop working
    }
    else if (pin !== validPin) {
        alert('Enter valid pin');
        return;//here the function will stop working

    }



    const availavleValance = parseInt(document.getElementById('available-balance').innerText);//insdie span tag it is also string like values of input tags
    console.log(availavleValance);

    const totalNewValue = amount + availavleValance;
    newValance = document.getElementById('available-balance').innerText = totalNewValue;
    console.log(newValance);


})

//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});
