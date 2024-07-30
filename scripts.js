document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});