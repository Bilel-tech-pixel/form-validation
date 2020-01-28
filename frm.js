var firstName = document.querySelector(".name")
var sendBtn = document.querySelector('.btn-send')
var address = document.querySelector('.address')
var email = document.querySelector('.email')
var password = document.querySelector('.password')
var comment = document.querySelector('.comment')

let nameRegex = /^[a-zA-Z]{3,}$/
let adressRegex = /^[a-zA-Z0-9]{5,}$/
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[a-z]{2,4}$/
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/


sendBtn.addEventListener("click", function(e){
    e.preventDefault() // To prevent the page refresh
    if(address.value === "" || email.value === "" || password.value === "" || comment.value === ""){
        alert('All Fields are required!')
    }else if(!nameRegex.test(firstName.value)){
        alert('Please enter a valid name!')
    }
    else if(!adressRegex.test(address.value)){
        alert('Please enter a valid address!')
    }
    else if(!emailRegex.test(email.value)){
        alert('please enter a valid email!')
    }
     else if(!passwordRegex.test(password.value)){
        alert('please enter a valid password!')
     }

    else {alert("les donnes sont sauvgardees")} 
    
})

function reset(){
    firstName=null,
    address = "",
    email="",
    password="",
    comment=""
}


