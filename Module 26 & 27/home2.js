// console.log('here it is ')

// console.log("home js file connected")

function getIdInt (id){
    const element = parseInt( document.getElementById(id).value);
     return element;
}
function getId (id){
    const element =  document.getElementById(id).value;
     return element;
}

function getIdText (id){
   const element = parseInt(document.getElementById(id).innerText);
   return element; //return needs to ve added when anything except parameter is needed to be used outside the function
}


//here variables are not fixed thats why it is a resuasvle element 
function getText(id){
    const value = document.getElementById('available-balance');
      value.innerText = id;//here return is not needed since we are using parameter as the final value
}


//add money feature

document.getElementById('add-money-btn').addEventListener('click' , function(e){
    e.preventDefault()//it will eliminate the default form vehaviour of reloading 
    
    const vank = getId('bank');
    
    const accountNumver = getId('account-number');

    const amount = getIdInt('add-amount');
    
    const pinNumver = getIdInt('add-pin');

    const availavleValance = getIdText('available-balance');

    const newValance = availavleValance + amount;

     getText(newValance);//here cotation is not needed since we are not using returned value outside the function and newValance is a variable not a string and it's value is intiger and in id parameter an integer is required
    console.log(newValance);

    if (accountNumver.length < 11) {
        alert('enter 11 digits')
        return;//here the function will stop working
    }
    else if (pinNumver !== validPin) {
        alert('Enter valid pin');
        return;//here the function will stop working

    }

})



//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getIdInt("withdraw-amount");

  const availableBalance = getIdText('available-balance');

  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

 getText(totalNewAvailableBalance);
});



//toggling feature

document.getElementById('add-button').addEventListener('click' , function(e){
    //here e.preventDefault() is not needed since event handler is not inside a vutton
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';//here add money container will remaining thats why display is vlock

})
document.getElementById('cash-out-button').addEventListener('click' , function(e){
    //here e.preventDefault() is not needed since event handler is not inside a vutton
    document.getElementById('add-money-parent').style.display = 'none';//here add money  display is none 
    document.getElementById('cash-out-parent').style.display = 'block';

})