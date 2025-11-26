import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const form = document.getElementById('signupForm');
const emailInput = document.getElementById('suEmail');
const passwordInput = document.getElementById('suPassword');
const confirmInput = document.getElementById('suPasswordConfirm');
const messageEl = document.getElementById('message');

function showMessage(msg, isError = true) {
  if (!messageEl) return;
  messageEl.textContent = msg;
  messageEl.style.color = isError ? '#b00020' : '#078a34';
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = (emailInput || {}).value?.trim();
    const password = (passwordInput || {}).value || '';
    const confirm = (confirmInput || {}).value || '';
    if (!email || !password) { showMessage('Enter email and password'); return; }
    if (password !== confirm) { showMessage('Passwords do not match'); return; }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showMessage('Account created — redirecting...', false);
      setTimeout(()=> window.location.href = 'home.html', 800);
    } catch (err) {
      console.error(err);
      showMessage(err?.message || 'Sign up failed');
    }
  });
}
