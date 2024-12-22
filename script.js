document.addEventListener('DOMContentLoaded', function () {
    const fakeWebsite = document.getElementById('fake-website');
    const terminal = document.getElementById('tesla-terminal');
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('passwordInput');
    const message = document.getElementById('message');
    
    let keyHoldTimer;
    let keyHoldStart = false;

    // Event listener for holding 'T' key
    window.addEventListener('keydown', function (e) {
        if (e.key.toLowerCase() === 't' && !keyHoldStart) {
            keyHoldStart = true;
            keyHoldTimer = setTimeout(() => {
                fakeWebsite.style.display = 'none';
                terminal.style.display = 'block';
                document.querySelector('.terminal-output').innerHTML = `
                    <p>Initializing Secure Terminal...</p>
                    <p>Please wait...</p>
                    <p>Connection successfully established...</p>
                    <p>Booting Encryption Console...</p>
                `;
                // Change terminal background to black
                terminal.classList.add('black-background');
                
                // Delay to simulate loading, then show the password input
                setTimeout(() => {
                    document.getElementById('password-input').style.display = 'block'; // Show password box
                }, 3000); // Delay of 3 seconds before showing the password box
            }, 3000); // 3 seconds hold
        }
    });

    // Event listener for releasing 'T' key
    window.addEventListener('keyup', function (e) {
        if (e.key.toLowerCase() === 't') {
            if (keyHoldTimer) {
                clearTimeout(keyHoldTimer);
                keyHoldStart = false;
            }
        }
    });

    passwordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const enteredPassword = passwordInput.value.trim().toUpperCase();
        const correctPassword = "TESLA";
        
        if (enteredPassword === correctPassword) {
            window.location.href = "https://deanobones.github.io/Odysseus/"; // Redirect on correct password
        } else {
            message.textContent = "Access denied. Incorrect code.";
        }
    });
});
