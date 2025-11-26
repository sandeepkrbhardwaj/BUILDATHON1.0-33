import { auth } from './firebase-config.js';
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const form = document.getElementById('resetForm');
const emailInput = document.getElementById('resetEmail');
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
    if (!email) { showMessage('Enter your account email'); return; }
    try {
      await sendPasswordResetEmail(auth, email);
      showMessage('Password reset email sent. Check your inbox.', false);
    } catch (err) {
      console.error(err);
      showMessage(err?.message || 'Failed to send reset email');
    }
  });
}
