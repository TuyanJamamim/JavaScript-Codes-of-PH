// console.log('here it is ')

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



//add money feature

document.getElementById('add-money-btn').addEventListener('click' , function(e){
    e.preventDefault()//it will eliminate the default form vehaviour of reloading 
    
    const vank = document.getElementById('bank').value;
    
    const accountNumver = document.getElementById('account-number').value;
    const amount = parseInt( document.getElementById('add-amount').value
    );
    const pinNumver = parseInt ( document.getElementById('add-pin').value  );

    const availavleValance = parseInt(document.getElementById('available-balance').innerText);

    const newValance = availavleValance + amount;
    const finalValance = document.getElementById('available-balance').innerText = newValance;
    console.log(finalValance);

    if (accountNumver.length < 11) {
        alert('enter 11 digits')
        return;//here the function will stop working
    }
    else if (pinNumver !== validPin) {
        alert('Enter valid pin');
        return;//here the function will stop working

    }

})

//toggling feature

documen.getElementById('add-button').addEventListener('click' , function(e){
    //here e.preventDefault() is not needed since event handler is not inside a vutton
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';//here add money container will remaining thats why display is vlock

})
documen.getElementById('cash-out-button').addEventListener('click' , function(e){
    //here e.preventDefault() is not needed since event handler is not inside a vutton
    document.getElementById('add-money-parent').style.display = 'none';//here add money  display is none 
    document.getElementById('cash-out-parent').style.display = 'block';

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
