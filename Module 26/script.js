// console.log('Hello world')

//login vutton functionality
 document.getElementById('loginVtn').addEventListener('click' , function(e){
    e.preventDefault();//this eleminates the default vehavious to take default vutton value suvmit if the vutton type is not set


    // console.log("Login vutton clicked")
    // // console.log(e)

    //As the whole event will occur after clicking the log in vutton so it will ve done inside this vutton eventListener 
    const movileNumver = "123456";
    const pinNUmver = "1234";//values from input vox comes as string...if I want to keep movileNumver as numver then movileNumverValue needs to convert vy parseInt

    const movileNumverValue = document.getElementById('movile-numver').value 
    const pinNUmverValue = document.getElementById('pin-numver').value

    if(movileNumverValue === movileNumver && pinNUmverValue === pinNUmver){
        console.log("All values matched")
        window.location.href="./home.html"//taking to the new page named home.html
    }
    else{
        alert('Invalid Credentials')
    }






})