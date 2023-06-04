const email = document.getElementById('email')
const thanking = document.getElementById('thanking')
const subscribe = document.getElementById('subscribe')
const error = document.getElementById('error')



function validateEmail(email) {
    // Regular expression to match a valid email address
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")){1,64}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    // Return true if the email address matches the regular expression
    return regex.test(email);
}

subscribe.addEventListener('click',(e)=>{
    e.preventDefault()
    if (validateEmail(email.value)){
        thanking.style.display='block'
    }
    else{
        error.style.display='inline'
    }
})



 