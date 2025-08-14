let form = document.querySelector("form");
let username = document.getElementsByName("Username");
let age = document.getElementsByName("age");
let pw = document.getElementsByName("password");
let confirm = document.getElementById('Confirm');
// console.log(username[0], age[0], email[0], pw[0]);

function handleSubmit(e){
    e.preventDefault
    // console.log('Event Firing')
}

form.addEventListener('input', handleSubmit)

function validate(e) {
    let usrValid = validUsername();
}

function validUsername(){
    if (username[0].value == "")
        alert("Please enter a username");
        return false;
    }

    return username.value;

function validAge(){
    if (user)
}

