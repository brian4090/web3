document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            // If the form is valid, you can handle the form submission here.
            alert('Form submitted successfully!');
            sendEmail(); // Call the function to send the email
            form.reset();
        }
    });

    // Your existing code for validateForm, setError, and setSuccess functions...

    function sendEmail() {
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const commentInput = document.getElementById('comment');

        const formData = new FormData();
        formData.append('email', emailInput.value);
        formData.append('phone', phoneInput.value);
        formData.append('comment', commentInput.value);

        fetch('send_email.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => {
                // Handle the response if needed
                // For example, you could display a success message to the user
                console.log('Email sent successfully.');
            })
            .catch(error => {
                // Handle errors if the email sending fails
                console.error('Error sending the email:', error);
            });
    }
});
