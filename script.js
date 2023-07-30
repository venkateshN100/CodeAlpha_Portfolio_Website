    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Perform validation checks on form data
        if (!name || !email || !message) {
            alert("Please fill in all required fields before submitting the form.");
            return; // Stop further execution
        }

        // Create a data object with the form data
        const formDataObject = {
            name: name,
            email: email,
            message: message
        };

        // Send the form data to the server using a fetch API or any other method
        // For demonstration purposes, we'll just show a success message here
        alert("Form data submitted successfully:\n\n");

        // Reset the form after successful submission (optional)
        document.getElementById("contactForm").reset();
    }

    // Attach the form submission handler to the form
    document.getElementById("contactForm").addEventListener("submit", handleFormSubmission);