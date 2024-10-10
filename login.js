document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        displayMessage('User already exists. Please choose a different username.');
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        displayMessage('Signup successful! You can now log in.');
    }

    this.reset();
});

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username] === password) {
        displayMessage('Login successful! Welcome, ' + username + '.');
    } else {
        displayMessage('Invalid username or password. Please try again.');
    }

    this.reset();
});

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}