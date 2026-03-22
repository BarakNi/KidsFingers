/**
 * effects.js — Visual effects (sparkles, floating emojis, background changes).
 */

function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getBgColors() { return isDark ? bgColorsDark : bgColorsLight; }
function getSparkleColors() { return isDark ? sparkleColorsDark : sparkleColorsLight; }

function spawnFloatingEmoji(emoji) {
  const el = document.createElement('div');
  el.className = 'floating-emoji';
  el.textContent = emoji;
  el.style.left = Math.random() * (window.innerWidth - 60) + 'px';
  el.style.top = Math.random() * (window.innerHeight - 100) + 100 + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

function spawnSparkles(count) {
  const colors = getSparkleColors();
  for (let i = 0; i < (count || 6); i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.background = randomFrom(colors);
    s.style.left = Math.random() * window.innerWidth + 'px';
    s.style.top = Math.random() * window.innerHeight + 'px';
    s.style.width = s.style.height = (Math.random() * 15 + 5) + 'px';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }
}

function changeBg() {
  document.getElementById('bg-overlay').style.background = randomFrom(getBgColors());
}
