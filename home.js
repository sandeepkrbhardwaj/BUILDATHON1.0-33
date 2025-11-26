import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

const userInfoEl = document.getElementById('userInfo');
const signOutBtn = document.getElementById('signOutBtn');

// Check auth state and display user info
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    userInfoEl.textContent = `Welcome, ${user.email || 'User'}!`;
    console.log('Signed in:', user.uid);
  } else {
    // User is not signed in — redirect to login
    userInfoEl.textContent = 'Not authenticated. Redirecting...';
    setTimeout(() => window.location.href = 'login.html', 1000);
  }
});

// Sign out handler
if (signOutBtn) {
  signOutBtn.addEventListener('click', async () => {
    try {
      await signOut(auth);
      console.log('Signed out');
      window.location.href = 'login.html';
    } catch (err) {
      console.error('Sign out failed:', err);
      alert('Sign out failed: ' + (err.message || err));
    }
  });
}
