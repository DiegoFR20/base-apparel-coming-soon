const input = document.querySelector("input");
const content = document.getElementById("content");
const arrow = document.getElementById("arrow");
const button = document.querySelector("button");

function validateEmail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    if(email.value.match(mailformat)){
        return true;
    }else
        return false;
}

function generateError(){
    console.log(`Email Inválido: ${email.value}`);
    input.style.borderColor = "red";
    errorDiv = document.createElement("div");
    errorParagraph = document.createElement('p');
    errorDiv.setAttribute("id", "error");
    content.appendChild(errorDiv);
    errorMessage = document.createTextNode("Please provide a valid email");
    errorParagraph.appendChild(errorMessage);
    errorDiv.appendChild(errorParagraph);

    errorIcon = document.createElement("img");
    errorIcon.setAttribute("src", "images/icon-error.svg");
    errorDiv.appendChild(errorIcon);
}

function submitEmail(email){
    if(email.value!=""){
        if(validateEmail(email)==false){
            generateError();
            event.preventDefault();
        }else
            console.log(`Email Válido: ${email.value}`);
    }else
        console.log(`Campo não preenchido.`);
}