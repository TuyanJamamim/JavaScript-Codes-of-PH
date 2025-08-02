for (let i = 1; i < 15; i++) 
    {
   
      console.log("Total Numers:", i);  
        if (i > 10) {
            break; // Exit the loop if i is greater than 10
        }
        
    }
    console.log("Life after break"); // Output the final value of i after the loop ends

    let num = 50;
    while ( num >= 1)
    {
        console.log("Current Numer: ", num);
         num--;
        
        if (num < 10) {
            break; // Exit the loop if num is greater than 10
        }
        
    }
