const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    const enteredPassword = passwordInput.value.trim().toUpperCase(); // Converts user input to uppercase
    const correctPassword = "TESLA"; // Replace with your desired password

    if (enteredPassword === correctPassword) {
        // Redirects to the next part of the game
        window.location.href = "https://deanobones.github.io/Odysseus/";
    } else {
        // Shows an error message if the password is incorrect
        message.textContent = "Access denied. Incorrect code.";
    }
});
