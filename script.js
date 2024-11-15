function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username.trim() === '') {
        alert('Please enter a username');
        return false;
    }

    if (password.trim() === '') {
        alert('Please enter a password');
        return false;
    }

    // Here you would typically make an API call to verify credentials
    // For demonstration, let's just show how you might handle a successful login
    handleLogin(username, password);
}

function handleLogin(username, password) {
    // This is where you would normally make an API call to your backend
    // For demonstration purposes, we'll just simulate a login
    
    // Example of how you might handle a successful login:
    alert('Login successful!');
    // Redirect to dashboard or home page
    window.location.href = 'first.html';

    // Example of how you might handle a failed login:
    // alert('Invalid username or password');
}

// Optional: Add event listener for Enter key
document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('button[type="submit"]').click();
    }
});

