script>
        function validateForm() {
            // Retrieve input values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            // Retrieve error message elements
            var nameError = document.getElementById("nameError");
            var emailError = document.getElementById("emailError");
            var passwordError = document.getElementById("passwordError");

            // Validation flags
            var isValid = true;

            // Clear previous error messages
            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";

            // Validate name
            if (name === "") {
                nameError.textContent = "Name is required.";
                isValid = false;
            }

            // Validate email using a regex pattern
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // Validate password
            if (password.length < 8) {
                passwordError.textContent = "Password must be at least 8 characters long.";
                isValid = false;
            }

            // Validate password confirmation
            if (password !== confirmPassword) {
                passwordError.textContent += "\nPasswords do not match.";
                isValid = false;
            }

            // If the form is valid, display an alert and prevent form submission
            if (isValid) {
                alert("Form submitted successfully!");
                // You can return true to allow the form to submit, or handle the submission differently here
                return true;
            }

            // If the form is not valid, prevent form submission
            return false;
            if(messageValue === '') {
                setError(message, 'Message is required');
            } else {
                setSuccess(message);
            }
        }
    
    
    

