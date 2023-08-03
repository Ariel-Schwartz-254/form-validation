const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let formIsValid = false;
let passwordsMatch = false;

function updateMainMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    messageContainer.style.borderColor = color;
}

function updatePasswordElements(color) {
    password1El.style.borderColor = color;
    password2El.style.borderColor = color;
}

function validateForm() {
    // Using constraint API
    formIsValid = form.checkValidity();
    // Style main message for an error
    if (!formIsValid) {
        updateMainMessage('Please fill out all fields.', 'red');
        return;
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        updatePasswordElements('green');
    } else {
        passwordsMatch = false;
        updateMainMessage('Make sure passwords match.', 'red');
        updatePasswordElements('red');
        return;
    }
    // If form is valid and passwords match
    if (formIsValid && passwordsMatch) {
        updateMainMessage('Successfully Registered!', 'green');
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e) {
    e.preventDefault()
    validateForm();
    (formIsValid && passwordsMatch) ? storeFormData() : false;
}

// Event Listeners
form.addEventListener('submit', processFormData);