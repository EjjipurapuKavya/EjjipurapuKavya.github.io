// ===============================
// Student Registration Form Validation
// ===============================

const form = document.getElementById("registrationForm");

const fullname = document.getElementById("fullname");
const rollnumber = document.getElementById("rollnumber");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const department = document.getElementById("department");
const dob = document.getElementById("dob");

// Error Messages

const fullnameError = document.getElementById("fullnameError");
const rollError = document.getElementById("rollError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const genderError = document.getElementById("genderError");
const departmentError = document.getElementById("departmentError");
const dobError = document.getElementById("dobError");

// Email Validation

function validateEmail(emailValue){

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(emailValue);

}

// Roll Number Validation (Letters & Numbers Only)

function validateRoll(roll){

    const pattern = /^[A-Za-z0-9]+$/;

    return pattern.test(roll);

}

// Mobile Validation (Exactly 10 Digits)

function validateMobile(number){

    const pattern = /^[0-9]{10}$/;

    return pattern.test(number);

}

// Form Submit

form.addEventListener("submit", function(event){

    event.preventDefault();

    // Clear Errors

    fullnameError.textContent = "";
    rollError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    genderError.textContent = "";
    departmentError.textContent = "";
    dobError.textContent = "";

    let valid = true;

    // Full Name

    if(fullname.value.trim() === ""){

        fullnameError.textContent = "Full Name should not be empty.";

        valid = false;

    }

    // Roll Number

    if(rollnumber.value.trim() === ""){

        rollError.textContent = "Roll Number is required.";

        valid = false;

    }

    else if(!validateRoll(rollnumber.value.trim())){

        rollError.textContent = "Roll Number must contain only letters and numbers.";

        valid = false;

    }

    // Email

    if(email.value.trim() === ""){

        emailError.textContent = "Email is required.";

        valid = false;

    }

    else if(!validateEmail(email.value.trim())){

        emailError.textContent = "Enter a valid Email ID.";

        valid = false;

    }

    // Mobile

    if(mobile.value.trim() === ""){

        mobileError.textContent = "Mobile Number is required.";

        valid = false;

    }

    else if(!validateMobile(mobile.value.trim())){

        mobileError.textContent = "Mobile Number must contain exactly 10 digits.";

        valid = false;

    }

    // Password

    if(password.value.length < 8){

        passwordError.textContent = "Password must be at least 8 characters long.";

        valid = false;

    }

    // Confirm Password

    if(confirmPassword.value === ""){

        confirmPasswordError.textContent = "Confirm your password.";

        valid = false;

    }

    else if(password.value !== confirmPassword.value){

        confirmPasswordError.textContent = "Passwords do not match.";

        valid = false;

    }

    // Gender

    const gender = document.querySelector('input[name="gender"]:checked');

    if(!gender){

        genderError.textContent = "Please select your gender.";

        valid = false;

    }

    // Department

    if(department.value === ""){

        departmentError.textContent = "Please select a department.";

        valid = false;

    }

    // Date of Birth

    if(dob.value === ""){

        dobError.textContent = "Please select your Date of Birth.";

        valid = false;

    }

    // Success

    if(valid){

        alert("🎉 Registration Successful!");

        form.reset();

    }

});