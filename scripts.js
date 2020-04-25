const input = document.querySelector("input");
const content = document.getElementById("content");
var contError = 0;

function validateEmail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    if(email.value.match(mailformat)){
        input.style.borderColor = "green";
        return true;
    }else
        input.style.borderColor = "";
        return false;
}

function generateError(){
    if(contError==0){
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
        errorIcon.setAttribute("alt", "Error Icon");
        errorDiv.appendChild(errorIcon);
        setTimeout(() => {
            input.style.borderColor = "";
            content.removeChild(errorDiv);
            contError=0;
        }, 5000);
    }
    contError++;
}

function submitEmail(email){
    if(email.value!=""){
        if(validateEmail(email)==false){
            generateError();
            event.preventDefault();
        }
    }
}