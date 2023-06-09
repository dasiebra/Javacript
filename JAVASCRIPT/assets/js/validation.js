const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const textmessage = document.getElementById('textmessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue =lastname.value.trim();
    const emailValue = email.value.trim();
    const textmessageValue = textmessage.value.trim();


if(firstnameValue === '') {
    setErrorFor(firstname, 'Bitte Vornamen eingeben');
    } else {
    setSuccessFor(firstname);
    }

if(lastnameValue === '') {
        setErrorFor(lastname, 'Bitte Nachnamen eingeben');
    } else {
        setSuccessFor(lastname);
    }

if(emailValue === '') {
        setErrorFor(email, 'Bitte Email angeben');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email ist ungültig');
    } else {
        setSuccessFor(email);
    }

    if(textmessageValue === '') {
        setErrorFor(textmessage, 'Bitte geben Sie eine Nachricht ein');
        } else {
        setSuccessFor(textmessage);
        }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}


