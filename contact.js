document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('contact.html')) {
        const form = document.querySelector('.form-container form');
        const envelope = document.getElementById('envelopeAnimation');
        const successMessage = document.createElement('p'); // Create success message element
        successMessage.textContent = 'נשלח בהצלחה!';
        successMessage.style.color = 'green';
        successMessage.style.fontSize = '18px';
        successMessage.style.textAlign = 'center';
        successMessage.style.display = 'none'; // Hide by default
        form.parentNode.appendChild(successMessage); // Append message below the form

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Form Fields
            const nameField = document.getElementById('name');
            const phoneField = document.getElementById('phone');

            // Validation Functions
            if (!validateName(nameField.value)) {
                alert('הכנס שם תקין (אותיות ורווחים בלבד)');
                nameField.focus();
                return;
            }

            if (!validatePhone(phoneField.value)) {
                alert('הכנס מספר טלפון תקין (9/10 ספרות, מתחיל ב-0)');
                phoneField.focus();
                return;
            }

            // Trigger envelope animation
            envelope.classList.remove('play-animation');
            void envelope.offsetWidth; // Reset animation
            envelope.classList.add('play-animation');

            // Show animation
            envelope.style.opacity = '1';

            // Hide envelope after animation and show success message
            setTimeout(() => {
                envelope.style.opacity = '0';
                successMessage.style.display = 'block'; // Show success message
            }, 2000);

            // Submit the form after animation if needed
            setTimeout(() => {
                form.reset(); // Clear form fields
            }, 2100);
        });

        // Name Validation Function
        function validateName(name) {
            const nameRegex = /^[A-Za-z\u0590-\u05FF\s]+$/; // Allows letters (Hebrew included) and spaces
            return nameRegex.test(name.trim());
        }

        // Phone Validation Function
        function validatePhone(phone) {
            const phoneRegex = /^0\d{8,9}$/; // Starts with 0, followed by 8 or 9 digits (total 9-10 digits)
            return phoneRegex.test(phone.trim());
        }
    }
});
