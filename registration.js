document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Logic
    const regForm = document.getElementById("registrationForm");

    if (regForm) {
        regForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default submission

            // Perform all validations
            if (
                validateFirstName() &&
                validateLastName() &&
                validatePhone() &&
                validateEmail("email") &&
                validatePassword("password") &&
                validateAge()
            ) {
                alert("ההרשמה הצליחה!");
                regForm.submit(); // Submit only if all validations pass
            }
        });

        function validateFirstName() {
            const firstName = document.getElementById("first-name").value.trim();
            const namePattern = /^[א-ת\s\-]+$/; // Hebrew letters, spaces, hyphens
            if (!namePattern.test(firstName)) {
                alert("שם פרטי חייב להכיל אותיות בעברית בלבד.");
                return false;
            }
            return true;
        }

        function validateLastName() {
            const lastName = document.getElementById("last-name").value.trim();
            const namePattern = /^[א-ת\s\-]+$/; // Hebrew letters, spaces, hyphens
            if (!namePattern.test(lastName)) {
                alert("שם משפחה חייב להכיל אותיות בעברית בלבד.");
                return false;
            }
            return true;
        }

        function validatePhone() {
            const phone = document.getElementById("phone").value.trim();
            const phonePattern = /^0[0-9]{8,9}$/; // Starts with 0, 9-10 digits
            if (!phonePattern.test(phone)) {
                alert("אנא הזן מספר טלפון תקין שמתחיל ב-0 (9-10 ספרות).");
                return false;
            }
            return true;
        }

        function validateEmail(inputId) {
            const email = document.getElementById(inputId).value.trim();
            const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Simple email validation
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

        function validateAge() {
            const ageInput = document.getElementById("age").value.trim();
            const age = parseInt(ageInput, 10);
            if (ageInput === "" || isNaN(age) || age < 8 || age > 120) {
                alert("אנא הזן גיל תקין בין 8 ל-120.");
                return false;
            }
            return true;
        }
    }

    // Login Popup Logic
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

    // Shared Validation Functions
    function validateEmail(inputId) {
        const email = document.getElementById(inputId).value.trim();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Simple email validation
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
