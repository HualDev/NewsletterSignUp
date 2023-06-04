const email = document.getElementById('email')
const conatiner =document.getElementById('container')
const thanking = document.getElementById('thanking')
const subscribe = document.getElementById('subscribe')
const error = document.getElementById('error')
const dismiss = document.getElementById('dismiss')
const myEmail = document.getElementById('myEmail')


function validateEmail(email) {
    // Regular expression to match a valid email address
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")){1,64}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    // Return true if the email address matches the regular expression
    return regex.test(email);
}

subscribe.addEventListener('click',(e)=>{
    e.preventDefault()
    if (validateEmail(email.value)){
        conatiner.style.display='block'
        email.style.color='hsl(234, 29%, 20%)'
        email.style.borderColor='hsl(234, 29%, 20%)'
        error.style.display='none'
        myEmail.textContent=email.value
    }
    else{
        error.style.display='inline'
        email.style.color='hsl(4, 100%, 67%)'
        email.style.borderColor='hsl(4, 100%, 67%)'
    }
})

dismiss.addEventListener('click',()=>{
    conatiner.style.display='none'
})



 