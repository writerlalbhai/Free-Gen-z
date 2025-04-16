document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'genz' && password === '1234') {
    window.location.href = 'home.html';
  } else {
    document.getElementById('errorMsg').textContent = 'Wrong username or password!';
  }
});
