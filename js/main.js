/**
 * main.js — App initialization, mode switching, keyboard handling.
 */

let mode = 'geffen';
let isDark = false;
let keyIsDown = false;
let holdTimer = null;

// ===== DOM refs =====
const liftPrompt = document.getElementById('lift-prompt');
const gefSection = document.getElementById('geffen-section');
const gurSection = document.getElementById('gur-section');
const btnGeffen = document.getElementById('btn-geffen');
const btnGur = document.getElementById('btn-gur');
const darkToggle = document.getElementById('dark-toggle');

// ===== Dark mode =====
darkToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  darkToggle.textContent = isDark ? '☀️' : '🌙';
  changeBg();
  document.body.focus();
});

// ===== Mode switching =====
btnGeffen.addEventListener('click', (e) => { e.stopPropagation(); switchMode('geffen'); });
btnGur.addEventListener('click', (e) => { e.stopPropagation(); switchMode('gur'); });

function switchMode(m) {
  mode = m;
  btnGeffen.classList.toggle('active', m === 'geffen');
  btnGur.classList.toggle('active', m === 'gur');
  gefSection.style.display = m === 'geffen' ? 'block' : 'none';
  gurSection.classList.toggle('active', m === 'gur');
  if (m === 'gur') loadNewWord();
  document.body.focus();
}

// ===== Lift-finger prompt =====
function showLiftPrompt() { liftPrompt.classList.add('show'); }
function hideLiftPrompt() { liftPrompt.classList.remove('show'); }

// ===== Keyboard =====
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (keyIsDown) { clearTimeout(holdTimer); showLiftPrompt(); return; }

  keyIsDown = true;
  hideLiftPrompt();

  const key = e.key;
  if (mode === 'geffen') {
    handleGeffen(key.length === 1 ? key : '');
  } else {
    if (key.length === 1 && /[a-zA-Z]/.test(key)) handleGur(key);
  }

  holdTimer = setTimeout(() => { if (keyIsDown) showLiftPrompt(); }, holdPromptDelay);
});

document.addEventListener('keyup', () => {
  keyIsDown = false;
  clearTimeout(holdTimer);
  hideLiftPrompt();
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.mode-btn') || e.target.closest('#dark-toggle')) return;
  if (mode === 'geffen') handleGeffen('');
});

document.body.focus();
