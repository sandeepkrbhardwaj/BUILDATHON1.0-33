// Login page JavaScript (module)
// Uses Firebase Authentication (modular v9) and the shared `firebase-config.js` module

import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
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
    if (!email || !password) { showMessage('Enter email and password'); return; }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage('Login successful — redirecting…', false);
      setTimeout(() => window.location.href = 'home.html', 700);
    } catch (err) {
      console.error(err);
      showMessage(err?.message || 'Login failed');
    }
  });
}

// Optional: observe auth changes (useful for debugging / auto-redirect)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('Already signed in:', user.uid || user.email);
  }
});
