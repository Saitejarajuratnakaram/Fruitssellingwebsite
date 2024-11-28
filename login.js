// Function to handle the login process
const loginUser = () => {
    // Get the email and password entered by the user
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve the stored email and password from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Check if the entered email and password match the stored ones
    if (!loginEmail || !loginPassword) {
        alert("Please enter both email and password.");
        return;
    }

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        // If credentials are correct, show a success message and redirect to the user page
        alert("Login successful!");
        window.location.href = "userpage.html"; // Redirect to user page on successful login
    } else {
        // If credentials do not match, show an error message
        alert("Invalid email or password. Please try again.");
        // Optionally, you could add a visual shake effect to the password input or both fields
        document.getElementById("loginPassword").classList.add("error-shake");
        setTimeout(() => {
            document.getElementById("loginPassword").classList.remove("error-shake");
        }, 1000);
    }
};

// Optional: You can also add an event listener for the "Enter" key to trigger the login function
document.getElementById("loginPassword").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        loginUser(); // Trigger login on pressing Enter
    }
});
