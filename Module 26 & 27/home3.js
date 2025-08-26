// console.log('here it is ')

// console.log("home js file connected")


/* Reusavle function for accessing into form elements*/
function getIdInt (id){
    const element = parseInt( document.getElementById(id).value);
     return element;//here return is needed since we are using this value outside the function it is used in getting amount and pin number and amount and pin number are adding,sutracting,comparing....it has use cases outside of this function..thats why return is needed
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

//toggle class Reusavle function
function toggleClass(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';//here all of the items with form class will be hidden

    }
  document.getElementById(id).style.display = 'block' ;//here no return is needed since we are not using this value outside the function..it it not adding,subtracting,comparing...it has no use cases outside of this function..thats why return is not needed
  
}

//toggle color Reusavle function
function toggleColor(id){
    /*this is another toggling feature for color changing*/
const colors = document.getElementsByClassName('form-btn');
for(const color of colors){
     color.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");
     color.classList.add("border-gray-300");
    
}
document.getElementById(id).classList.remove("border-gray-300")
document.getElementById(id).classList.add("border-[#0874f2]" ,  "bg-[#0874f20d]");

}




//toggling feature another technique(vy class)(for vutton shifting)

document.getElementById('add-button').addEventListener('click' , function(e){

   
    //now display only the add money form
  toggleClass('add-money-parent');

/*this is another toggling feature for color changing..as it will also work on clicking add money vutton so it is done inside eventlistener of add vutton*/



    toggleColor('add-button');//resuasvle function for toggle color


})


document.getElementById('cash-out-button').addEventListener('click' , function(e){


   toggleClass('cash-out-parent');

   /*this is another toggling feature for color changing*/
const colors = document.getElementsByClassName('form-btn');
for(const color of colors){
    /*this was my way */
    // color.style.backgroundColor = 'none';//here all of the items with form-btn class will be none..here another purpose is we dont know which vutton was clicked previously


    color.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");//here in stead of using color none(which is not required here),another approach of removing the classes is used...the classes are tailwind classes and later these classes are added to the clicked vutton here it is cash out button)...two different classes are removed/added vy comma(,)...if it's veen clicked previously remove these tailwind classes
    color.classList.add("border-gray-300");//the original gray vorder needs to ve get vack otherwise if cash out vutton is once clicked and then other vutton is clicked the gray vorder will never ve vack...
}

document.getElementById('cash-out-button').classList.remove("border-gray-300");//vy default gray tailwind class is also removed....vceause when cash vutton is clicked the gray vorder will need to ve removed and new vorder need to ve added...if cash out vutton had bg same needed to ve done for bg also
document.getElementById('cash-out-button').classList.add("border-[#0874f2]" ,  "bg-[#0874f20d]");


})


document.getElementById('transfer-button').addEventListener('click' , function(e){

 
   const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';//here all of the items with form class will be hidden

    }
    //now display only the add money form
    document.getElementById('transfer-money-parent').style.display = 'block';
    
    

})
document.getElementById('bonus-button').addEventListener('click' , function(e){

 
   const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';//here all of the items with form class will be hidden

    }
    //now display only the add money form
    document.getElementById('get-bonus-parent').style.display = 'block';
    
    

})





//toggle class for color change





