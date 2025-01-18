document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closePopup = document.getElementById("closePopup");

    if (loginForm) {
        // Show login popup when login button is clicked
        loginBtn.addEventListener("click", () => {
            loginPopup.style.display = "flex";
        });

        // Close the popup when the close button is clicked
        closePopup.addEventListener("click", () => {
            loginPopup.style.display = "none";
        });

        // Close the popup when clicking outside the content
        window.addEventListener("click", (e) => {
            if (e.target === loginPopup) {
                loginPopup.style.display = "none";
            }
        });

        // Handle login form submission
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validateEmail("login-email") && validatePassword("login-password")) {
                alert("התחברת בהצלחה!");
                loginPopup.style.display = "none";
                loginForm.reset(); // Reset the login form
            }
        });
    }

    // Validation Functions
    function validateEmail(inputId) {
        const email = document.getElementById(inputId).value.trim();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(email)) {
            alert("אנא הזן כתובת מייל תקינה.");
            return false;
        }
        return true;
    }

    function validatePassword(inputId) {
        const password = document.getElementById(inputId).value.trim();
        if (password.length < 6) {
            alert("הסיסמה חייבת להכיל לפחות 6 תווים.");
            return false;
        }
        return true;
    }
});
