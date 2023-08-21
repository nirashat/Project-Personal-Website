//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const erorrNodes = document.querySelectorAll(".error");

//Validate Data
function validateForm(){
    clearMessages();
    let errorFlag = false;

    if(nameInput.value.lenghth <1){
        erorrNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        erorrNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;

    }
    
    if(phone.value.lenghth <1){
        erorrNodes[2].innerText = "Phone number cannot be blank";
        phone.classList.add("error-border");
        errorFlag = true;

    }

    if(message.value.lenghth <1){
        erorrNodes[3].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success"
    }
}

//Clear error
function clearMessages(){
    for(let i = 0;i<erorrNodes.length; i++){
        erorrNodes[i].innerText = "";
    }

    success.innerText= "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}