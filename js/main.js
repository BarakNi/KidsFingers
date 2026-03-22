/**
 * main.js — App init, mode switching, keyboard handling, language toggle.
 * Hidden fishing game: triple-click any game title to reveal it.
 */

let mode = 'geffen';
let isDark = false;
let keyIsDown = false;
let holdTimer = null;
let fishingUnlocked = false;

// ===== DOM refs =====
const liftPrompt = document.getElementById('lift-prompt');
const gefSection = document.getElementById('geffen-section');
const gurSection = document.getElementById('gur-section');
const fishSection = document.getElementById('fishing-section');
const btnGeffen = document.getElementById('btn-geffen');
const btnGur = document.getElementById('btn-gur');
const btnFishing = document.getElementById('btn-fishing');
const darkToggle = document.getElementById('dark-toggle');
const langToggle = document.getElementById('lang-toggle');

// ===== Hidden game unlock: triple-click any h1 =====
let titleClickCount = 0;
let titleClickTimer = null;

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'H1') {
    titleClickCount++;
    clearTimeout(titleClickTimer);
    titleClickTimer = setTimeout(function() { titleClickCount = 0; }, 600);
    if (titleClickCount >= 3) {
      titleClickCount = 0;
      unlockFishing();
    }
  }
});

function unlockFishing() {
  if (fishingUnlocked) return;
  fishingUnlocked = true;
  btnFishing.style.display = '';
  // Little reveal animation
  spawnSparkles(12);
  for (var i = 0; i < 6; i++) {
    setTimeout(function() { spawnFloatingEmoji(randomFrom(['🎣','🐟','🐠','🐡','🌊','🦈'])); }, i * 100);
  }
}

// ===== Update all UI text for current language =====
function updateUIText() {
  var lang = getLang();
  document.getElementById('gef-title').textContent = lang.ui.gefTitle;
  document.getElementById('gef-subtitle').textContent = lang.ui.gefSubtitle;
  document.getElementById('gur-title').textContent = lang.ui.gurTitle;
  document.getElementById('gur-subtitle').textContent = emojiOnlyActive ? lang.ui.emojiOnlySubtitle : lang.ui.gurSubtitleNormal;
  liftPrompt.innerHTML = lang.ui.liftPrompt;

  // Set text direction
  gefSection.style.direction = lang.dir;
  gurSection.style.direction = lang.dir;

  // Update score text
  if (mode === 'gur') updateScoreDisplay();
}

// ===== Language toggle =====
langToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  gameLang = gameLang === 'en' ? 'he' : 'en';
  langToggle.textContent = gameLang === 'en' ? '\u{1F1EE}\u{1F1F1} \u05E2\u05D1\u05E8\u05D9\u05EA' : '\u{1F1EC}\u{1F1E7} English';
  updateUIText();
  gurStreak = 0;
  gurBestStreak = 0;
  emojiOnlyActive = false;
  if (mode === 'gur') loadNewWord();
  document.body.focus();
});

// ===== Dark mode =====
darkToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  isDark = !isDark;
  document.body.classList.toggle('dark', isDark);
  darkToggle.textContent = isDark ? '\u2600\uFE0F' : '\u{1F319}';
  changeBg();
  document.body.focus();
});

// ===== Mode switching =====
btnGeffen.addEventListener('click', function(e) { e.stopPropagation(); switchMode('geffen'); });
btnGur.addEventListener('click', function(e) { e.stopPropagation(); switchMode('gur'); });
btnFishing.addEventListener('click', function(e) { e.stopPropagation(); switchMode('fishing'); });

function switchMode(m) {
  // Clean up previous mode
  if (mode === 'fishing') stopFishing();

  mode = m;
  btnGeffen.classList.toggle('active', m === 'geffen');
  btnGur.classList.toggle('active', m === 'gur');
  btnFishing.classList.toggle('active', m === 'fishing');

  gefSection.style.display = m === 'geffen' ? 'block' : 'none';
  gurSection.classList.toggle('active', m === 'gur');
  fishSection.classList.toggle('active', m === 'fishing');

  // Hide lift prompt when not in geffen/gur
  if (m === 'fishing') hideLiftPrompt();

  if (m === 'gur') loadNewWord();
  if (m === 'fishing') {
    fishState = 'idle';
    document.getElementById('fish-message').textContent = 'Press SPACE to cast your line!';
    document.getElementById('fish-message').classList.remove('urgent');
    document.getElementById('fish-catch-display').textContent = '';
  }
  document.body.focus();
}

// ===== Lift-finger prompt =====
function showLiftPrompt() { liftPrompt.classList.add('show'); }
function hideLiftPrompt() { liftPrompt.classList.remove('show'); }

// ===== Keyboard =====
document.addEventListener('keydown', function(e) {
  e.preventDefault();

  // Fishing mode: only SPACE matters, no hold-detection
  if (mode === 'fishing') {
    if (e.code === 'Space' || e.key === ' ') {
      if (fishState === 'idle') {
        startFishing();
      } else {
        handleFishingInput();
      }
    }
    return;
  }

  // Geffen/Gur: existing hold-detection logic
  if (keyIsDown) { clearTimeout(holdTimer); showLiftPrompt(); return; }

  keyIsDown = true;
  hideLiftPrompt();

  var key = e.key;
  var lang = getLang();

  if (mode === 'geffen') {
    handleGeffen(key.length === 1 ? key : '');
  } else {
    if (key.length === 1 && lang.isLetter(key)) handleGur(key);
  }

  holdTimer = setTimeout(function() { if (keyIsDown) showLiftPrompt(); }, holdPromptDelay);
});

document.addEventListener('keyup', function() {
  keyIsDown = false;
  clearTimeout(holdTimer);
  hideLiftPrompt();
});

document.addEventListener('click', function(e) {
  if (e.target.closest('.mode-btn') || e.target.closest('#dark-toggle') || e.target.closest('#lang-toggle')) return;
  if (e.target.tagName === 'H1') return; // don't trigger geffen on title clicks
  if (mode === 'geffen') handleGeffen('');
  if (mode === 'fishing') {
    if (fishState === 'idle') {
      startFishing();
    } else {
      handleFishingInput();
    }
  }
});

// ===== Init =====
updateUIText();
document.body.focus();
