function validateFirstName(){
    let firstName = document.getElementById("firstName").value;
    let errorFirstName = document.getElementById("errorFirstName");
    let sign = document.getElementById("sign");
    let firstNamePattern = /^[A-Z]+[a-z]*$/;
    if(firstName.length == ""){
        errorFirstName.innerHTML = "Cannot be blank";
        errorFirstName.style.display = "block";
        sign.style.display = "block";
        return false;
    }
    if(firstName.match(firstNamePattern)){
        sign.className = "success";
        errorFirstName.style.display = "none"
        sign.classList.add("success");
        return true;
    }
    else{
        errorFirstName.innerHTML = "1st letter should be uppercase";
        errorFirstName.style.display = "block";
        sign.style.display = "block";
        return false;
    }

    sign.className = "success";
    return true;
}
function validateLastName(){
    let lastName = document.getElementById("lastName").value;
    let sign = document.getElementById("sign");
    let errorLastName = document.getElementById("errorLastName");
    let lastNamePattern = /^[A-Z]+[a-z]*$/;

    if(lastName.length == ""){
        errorLastName.innerHTML = "Cannot be blank";
        errorLastName.style.display = "block";
        sign.style.display = "block";
        return false;
    }
    if(lastName.match(lastNamePattern)){
        sign.className = "success";
        errorLastName.style.display = "none";
        sign.style.color = "green";
        return true;
    }
    else{
        errorLastName.innerHTML = "1st letter should be uppercase";
        sign.style.display = "block";
        sign.style.display = "block";
        return false;

    }
}

function validateEmail(){
    let email = document.getElementById("email").value;
    let errorEmail = document.getElementById("errorEmail");
    let sign = document.getElementById("sign");

    if(email.length == ""){
        errorEmail.innerHTML = "Cannot be blank";
        errorEmail.style.display = "block";
        sign.style.display = "block";
        return false;
    }
    sign.className = 'success';
    errorEmail.style.display = "none";
    return true;
}

function successSubmit(){
    alert("Information submitted successfully")
}
