const step1 = document.querySelector(".step1"),
    step2 = document.querySelector(".step2"),
    step3 = document.querySelector(".step3"),
    emailAddress = document.getElementById("emailAddress"),
    verifyEmail = document.getElementById("verifyEmail"),
    inputs = document.querySelectorAll(".otp-group input"),
    nextButton = document.querySelector(".nextButton"),
    verifyButton = document.querySelector(".verifyButton"),
    form = document.getElementById("registrationForm"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("confirmPassword");

let OTP = "";
let userDetails = {};

window.addEventListener("load", () => {
    emailjs.init("sXZHw8y41B0xlsb-y");
    step2.style.display = "none";
    step3.style.display = "none";
    nextButton.classList.add("disable");
    verifyButton.classList.add("disable");
});

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
        nextButton.classList.remove("disable");
    } else {
        nextButton.classList.add("disable");
    }
};

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

const sendOTP = () => {
    const email = emailAddress.value;
    if (!email || !validateEmailFormat(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Password and Confirm Password must match.");
        return;
    }

    OTP = generateOTP();
    nextButton.innerHTML = "&#9889; Sending...";

    let templateParams = {
        from_name: "Eatsy",
        OTP: OTP,
        message: "Please find the OTP for your registration.",
        reply_to: email,
    };

    emailjs.send("service_tn0m3z8", "template_0y0t6qj", templateParams).then((response) => {
        verifyEmail.innerHTML = email;
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
    }, (error) => {
        console.error("Error sending OTP:", error);
        nextButton.innerHTML = "Next &rarr;";
        alert("Failed to send OTP. Please try again.");
    });
};

const verifyOTP = () => {
    let otpInput = "";
    inputs.forEach((input) => {
        otpInput += input.value;
    });

    if (otpInput === OTP.toString()) {
        // Save the user's details in localStorage after OTP verification
        localStorage.setItem("email", emailAddress.value);
        localStorage.setItem("password", password.value);

        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
    } else {
        alert("Incorrect OTP. Please try again.");
        verifyButton.classList.add("error-shake");
        setTimeout(() => {
            verifyButton.classList.remove("error-shake");
        }, 1000);
    }
};

const redirectToLogin = () => {
    window.location.href = "profile.html"; // Redirect to login page after successful registration
};

const validateEmailFormat = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

const resendOTP = () => {
    sendOTP(); // Resend OTP in case the user didn't receive it
};

const moveToNext = (currentInput, nextIndex) => {
    if (currentInput.value.length === 1 && nextIndex < inputs.length) {
        inputs[nextIndex].focus();
    }
};
