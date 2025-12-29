// DOM elements
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Generate month dropdown using DOM
for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i < 10 ? "0" + i : i;
    monthSelect.appendChild(option);
}

// Generate year dropdown using DOM
let currentYear = new Date().getFullYear();
for (let i = currentYear; i <= currentYear + 10; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}

// Automatic focus movement
function moveFocus(currentField, nextFieldId,maxLength) {
    if (currentField.value.length == maxLength) {
        document.getElementById(nextFieldId).focus();
    }
}

// Form validation
function validateForm() {

    let name = document.getElementById("name").value;
    let card = document.getElementById("card").value;
    let cvv = document.getElementById("cvv").value;
    let month = monthSelect.value;
    let year = yearSelect.value;

    let isValid = true;

    // Regular Expressions
    let nameRegex = /^[A-Za-z ]+$/;
    let cardRegex = /^[456]\d{15}$/;
    let cvvRegex = /^\d{3}$/;

    // Name validation
    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerText =
            "Name must contain only alphabets.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Card validation
    if (!cardRegex.test(card)) {
        document.getElementById("cardError").innerText =
            "Card number must start with 4, 5, or 6 and have 16 digits.";
        isValid = false;
    } else {
        document.getElementById("cardError").innerText = "";
    }

    // CVV validation
    if (!cvvRegex.test(cvv)) {
        document.getElementById("cvvError").innerText =
            "CVV must be a 3-digit number.";
        isValid = false;
    } else {
        document.getElementById("cvvError").innerText = "";
    }

    // Expiry date validation
    let today = new Date();
    let expiryDate = new Date(year, month);

    if (expiryDate <= today) {
        document.getElementById("dateError").innerText =
            "Expiry date must be in the future.";
        isValid = false;
    } else {
        document.getElementById("dateError").innerText = "";
    }

    return isValid;
}
