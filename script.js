script.jsfunction showForm(type) {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.add('hidden');

  if (type === 'login') {
    document.getElementById('loginForm').classList.remove('hidden');
  } else if (type === 'signup') {
    document.getElementById('signupForm').classList.remove('hidden');
  }
}
