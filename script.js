document.addEventListener('DOMContentLoaded', function () {
    const fakeWebsite = document.getElementById('fake-website');
    const terminal = document.getElementById('tesla-terminal');
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('passwordInput');
    const message = document.getElementById('message');
    const terminalOutput = document.getElementById('terminal-output'); // Terminal output div

    const terminalMessages = [
        "Syncing...",
        "Cipher protocols initiating...",
        "Your key lies wrapped in light's embrace,",
        "Twist the blade to reveal its face.",
        "Ancient methods guide the way,",
        "Lumina's light keeps dark at bay.",
        "Encryption complete."
    ];

    let keyHoldTimer;
    let keyHoldStart = false;
    let terminalStarted = false; // Flag to prevent messages from repeating

    function displayMessagesSequentially() {
        let index = 0;
        const interval = 3000; // 3 seconds between messages

        function displayNextMessage() {
            if (index < terminalMessages.length) {
                const newLine = document.createElement('p');
                newLine.textContent = terminalMessages[index];
                terminalOutput.appendChild(newLine);
                index++;
                setTimeout(displayNextMessage, interval);
            } else {
                // After all messages are shown, display the password input box
                document.getElementById('password-input').style.display = 'block';
            }
        }

        displayNextMessage();
    }

    // Event listener for holding 'T' key
    window.addEventListener('keydown', function (e) {
        if (e.key.toLowerCase() === 't' && !keyHoldStart) {
            keyHoldStart = true;
            keyHoldTimer = setTimeout(() => {
                if (!terminalStarted) { // Ensure messages only show once
                    terminalStarted = true;
                    fakeWebsite.style.display = 'none';
                    terminal.style.display = 'block';

                    // Change background color of body to black when terminal is activated
                    document.body.style.backgroundColor = 'black'; // Change background color of the whole body

                    // Set terminal background to black
                    terminal.classList.add('black-background');

                    // Start displaying the messages
                    displayMessagesSequentially();
                }
            }, 3000); // 3 seconds hold
        }
    });

    // Event listener for releasing 'T' key
    window.addEventListener('keyup', function (e) {
        if (e.key.toLowerCase() === 't') {
            clearTimeout(keyHoldTimer); // Reset the timer if key is released early
            keyHoldStart = false;
        }
    });

    // Event listener for password input
    passwordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const enteredPassword = passwordInput.value.trim().toUpperCase();  // Convert to uppercase for case-insensitive match
        const correctPassword = 'TESLA'; // Correct password

        if (enteredPassword === correctPassword) {
            // Redirect to the webpage on correct password
            window.location.href = "https://deanobones.github.io/Odysseus/"; // Change this URL if needed
        } else {
            message.textContent = 'Access Code Incorrect. Try again.';
            message.style.color = 'red';
        }
    });

});
