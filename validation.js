function validateFirstName() {
    var firstNameInput = document.getElementById("firstName");
    var firstName = firstNameInput.value.trim();

    if (!/^[a-zA-Z]+$/.test(firstName)) {
        firstNameInput.setCustomValidity("First Name must contain only alphabets");
        displayErrorMessage(firstNameInput, "Name must contain only alphabets");
    } else if (firstName.length < 3) {
        firstNameInput.setCustomValidity("Name must be at least 3 letters");
        displayErrorMessage(firstNameInput, "Name must be at least 3 letters");
    } else {
        firstNameInput.setCustomValidity("");
        hideErrorMessage(firstNameInput);
    }
}

function validateLastName() {
    var lastNameInput = document.getElementById("lastName");
    var lastName = lastNameInput.value.trim();

    if (!/^[a-zA-Z]+$/.test(lastName)) {
        lastNameInput.setCustomValidity("Name must contain only alphabets");
        displayErrorMessage(lastNameInput, "Name must contain only alphabets");
    } else if (lastName.length < 3) {
        lastNameInput.setCustomValidity("Name must be at least 3 letters");
        displayErrorMessage(lastNameInput, "Name must be at least 3 letters");
    } else {
        lastNameInput.setCustomValidity("");
        hideErrorMessage(lastNameInput);
    }
}

function calculateAge() {
    var dobInput = document.getElementById("dob");
    var ageInput = document.getElementById("age");

    var dobValue = dobInput.value;
    if (dobValue) {
        var dob = new Date(dobValue);
        var today = new Date();
        var age = today.getFullYear() - dob.getFullYear();

        if (today.getMonth() < dob.getMonth() ||
            (today.getMonth() === dob.getMonth() && today.getDate() <= dob.getDate())) {
            age--;
        }

        ageInput.value = age;
    }
}

function validateAge() {
    var ageInput = document.getElementById("age");
    var age = ageInput.value.trim();

    if (!/^\d+$/.test(age)) {
        ageInput.setCustomValidity("Age must be digit");
        displayErrorMessage(ageInput, "Age must be a digit");
    } else {
        phoneNumberInput.setCustomValidity("");
        hideErrorMessage(phoneNumberInput);
    }
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        emailInput.setCustomValidity("Invalid email address");
        displayErrorMessage(emailInput, "Invalid email address");
    } else {
        emailInput.setCustomValidity("");
        hideErrorMessage(emailInput);
    }
}

function validatePhoneNumber() {
    var phoneNumberInput = document.getElementById("phoneNumber");
    var phoneNumber = phoneNumberInput.value.trim();

    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
        phoneNumberInput.setCustomValidity("Phone Number must be a 10-digit number");
        displayErrorMessage(phoneNumberInput, "Phone Number must be a 10-digit number");
    } else {
        phoneNumberInput.setCustomValidity("");
        hideErrorMessage(phoneNumberInput);
    }
}

function populateCities() {
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");

    var stateValue = stateSelect.value;
    citySelect.innerHTML = "";

    if (stateValue === "state1") {
        var cityOptions = [
            { value: "", text: "Select" },
            { value: "city1", text: "Kochi" },
            { value: "city2", text: "Trivandrum" },
            { value: "city3", text: "Kozhikode" }
        ];
    } else if (stateValue === "state2") {
        var cityOptions = [
            { value: "", text: "Select" },
            { value: "city4", text: "Chennai" },
            { value: "city5", text: "Coimbatore" },
            { value: "city6", text: "Madurai" }
        ];
    } else if (stateValue === "state3") {
        var cityOptions = [
            { value: "", text: "Select" },
            { value: "city7", text: "Bangalore" },
            { value: "city8", text: "Mysore" },
            { value: "city9", text: "Hubli" }
        ];
    } else {
        var cityOptions = [{ value: "", text: "Select" }];
    }

    cityOptions.forEach(function (option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        citySelect.appendChild(optionElement);
    });
}

function validatePassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        passwordInput.setCustomValidity("Password should have 8 letters and must contain at least one uppercase, lowercase and a digit");
        displayErrorMessage(passwordInput, "Password should have 8 letters and must contain at least one uppercase, lowercase and a digit");
    } else {
        passwordInput.setCustomValidity("");
        hideErrorMessage(passwordInput);
    }
}

function validateConfirmPassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");

    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
        displayErrorMessage(confirmPasswordInput, "Passwords do not match");
    } else {
        confirmPasswordInput.setCustomValidity("");
        hideErrorMessage(confirmPasswordInput);
    }
}

function displayErrorMessage(inputElement, errorMessage) {
    var errorElement = inputElement.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("error-message")) {
        errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        inputElement.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = errorMessage;
}