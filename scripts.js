const input = document.querySelector("input");
const content = document.getElementById("content");
const arrow = document.getElementById("arrow");
const button = document.querySelector("button");
const email = document.getElementById("email");

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
    errorParagraph = document.createElement("p");
    errorParagraph.style.marginTop = "10px";
    errorParagraph.style.marginLeft = "16px";
    content.appendChild(errorParagraph);
    errorMessage = document.createTextNode("Please provide a valid email");
    errorParagraph.appendChild(errorMessage);
    errorParagraph.style.color = "red";

    errorIcon = document.createElement("p");
    errorIconText = document.createTextNode("imagem de erro");
    errorIcon.appendChild(errorIconText);
    errorIcon.style.height = "24px";
    errorIcon.style.lineHeight = "24px";
    errorIcon.style.lineWidth = "24px";
    errorIcon.style.width = "24px";
    errorIcon.style.margin = "0";
    errorIcon.style.transform = "translate(-40px, -12px)";
    errorIcon.style.textIndent = "-9999px";
    errorIcon.style.position = "relative";
    errorIcon.style.background = "url(images/icon-error.svg) no-repeat right";
    button.appendChild(errorIcon);

    arrow.style.transform = "translateY(11px)";
}

function submitEmail(email){
    if(validateEmail(email)==false){
        generateError();
    }else    
        console.log(`Email Válido: ${email.value}`);
        
}