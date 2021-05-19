/* get form input elements */
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");
const textarea = document.querySelector("#text");
const checkbox = document.querySelector(".checkbox");
const feedback = document.querySelectorAll(".feedback");
const submit = document.querySelector("#submit");
var inputs = [username, firstName, lastName, email, password, rePassword, textarea];




/* error function */
function error(input) {
    input.className = 'form-control is-invalid';
}
/* succes function */
function success(input) {
    input.className = 'form-control is-valid';

}

/* username validation function */
function usernameValidation(param) {
    const usernameRegex = /^[a-z0-9]{5,18}$/;
    return usernameRegex.test(String(param));

}
/* name and surname validation validation function */
function nameValidation(param) {
    const usernameRegex = /^[a-zA-Z]{2,50}$/;
    return usernameRegex.test(String(param));

}
/* email validation function */
function emailValidation(param) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(param).toLowerCase());
}
/* password validation function */
function passwordValidation(param1, param2) {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    if (param1 == param2) {
        return passRegex.test(String(param1, param2));
    } else {
        return false;
    }
}
/* textarea validation function */
function textareaValidation(param) {

    if (param.length < 10) {
        return false;
       
    } else {
        return true;
    }
}

/* checkbox validation function */
function checkBoxValidation(param) {
    if (param.checked) {
        return true;
    } else {
        return false;
    }
}



function funcsitioncall(params) {
    
}

/* call all function and return last answer */
function funcsCaller() {

    /* call email function */
    if (emailValidation(email.value)) {
        success(email)
    } else {
        error(email);
    }

    /* call password function */
    if (passwordValidation(password.value, rePassword.value)) {
        success(password)
        success(rePassword)
    } else {
        error(password);
        error(rePassword);
    }

    /* call username function */
    if (usernameValidation(username.value)) {
        success(username)
    } else {
        error(username)
    }

    /* call name function */
    if (nameValidation(firstName.value)) {
        success(firstName)
    } else {
        error(firstName)
    }

    /* call surname function */
    if (nameValidation(lastName.value)) {
        success(lastName)
    } else {
        error(lastName)
    }

    /* textarea surname function */
    if (textareaValidation(textarea.value)) {
        success(textarea)
    } else {
        error(textarea)
    }


    /* call checkbox function */
    if (checkBoxValidation(checkbox)) {
        success(checkbox)
    } else {
        error(checkbox)
    }


}



form.addEventListener('keyup',  function(){
    const funcList = [
        usernameValidation(username.value),
        nameValidation(firstName.value),
        nameValidation(lastName.value),
        emailValidation(email.value),
        passwordValidation(password.value, rePassword.value),
        textareaValidation(textarea.value),
        checkBoxValidation(checkbox)
    ]

    funcsCaller();

    let result = funcList.every(function(e) {
        return e === true
    })

    if(result) {
        submit.removeAttribute('disabled');  
    }else{
        submit.setAttribute('disabled', true);
    }

    
})
