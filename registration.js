document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        // Prevent form submission for validation
        event.preventDefault();

        // Validate each field
        if (validateFirstName() & validateLastName() & validatePhone() &
            validateEmail() & validatePassword() & validateAge()) {
            alert("ההרשמה הצליחה!");
            form.submit(); // Only submit if all validations pass
        }
    });

    function validateFirstName() {
        const firstName = document.getElementById("first-name").value.trim();
        const namePattern = /^[א-ת]+$/;
        if (!namePattern.test(firstName)) {
            alert("שם פרטי חייב להכיל אותיות בעברית בלבד.");
            return false;
        }
        return true;
    }

    function validateLastName() {
        const lastName = document.getElementById("last-name").value.trim();
        const namePattern = /^[א-ת]+$/;
        if (!namePattern.test(lastName)) {
            alert("שם משפחה חייב להכיל אותיות בעברית בלבד.");
            return false;
        }
        return true;
    }

    function validatePhone() {
        const phone = document.getElementById("phone").value.trim();
        const phonePattern = /^0[0-9]{8,9}$/;
        if (!phonePattern.test(phone)) {
            alert("אנא הזן מספר טלפון תקין שמתחיל ב-0 (9-10 ספרות).");
            return false;
        }
        return true;
    }

    function validateEmail() {
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(email)) {
            alert("אנא הזן כתובת מייל תקינה.");
            return false;
        }
        return true;
    }

    function validatePassword() {
        const password = document.getElementById("password").value.trim();
        if (password.length < 6) {
            alert("הסיסמה חייבת להכיל לפחות 6 תווים.");
            return false;
        }
        return true;
    }

    function validateAge() {
        const age = parseInt(document.getElementById("age").value.trim(), 10);
        if (isNaN(age) || age < 8 || age > 120) {
            alert("אנא הזן גיל תקין בין 8 ל-120.");
            return false;
        }
        return true;
    }
});
