// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Copy email button
const btn = document.getElementById('copyEmail');
if (btn) {
  btn.addEventListener('click', () => {
    const email = document.getElementById('email').textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      btn.textContent = 'Copied';
      setTimeout(() => (btn.textContent = 'Copy'), 1500);
    }).catch(() => {
      alert('Copy failed — long-press to copy the email.');
    });
  });
}

// Local, device-only view counter (no tracking)
(function(){
  try {
    const key = 'collen_local_views';
    const n = parseInt(localStorage.getItem(key) || '0', 10) + 1;
    localStorage.setItem(key, String(n));
    const el = document.querySelector('#viewCounter span');
    if (el) el.textContent = String(n);
  } catch(e) {
    // localStorage may be disabled; ignore
  }
})();
