/**
 * fishing.js — Fishing Pond: a patience game (emoji diorama version).
 *
 * States: idle -> waiting -> bite -> caught/missed/tooEarly
 * The child watches the bobber sitting in an emoji pond.
 * When it dips (bite), they press SPACE.
 * Press too early = fish scared away. Wait too long = fish escapes.
 * Correct timing = catch! The creature replaces the bobber.
 */

var fishState = 'idle';
var fishWaitTimer = null;
var fishBiteTimer = null;
var fishCaught = [];
var fishPatience = 0;
var fishBestPatience = 0;

var fishPool = [
  { emoji: '🐟', name: 'Fish' },
  { emoji: '🐠', name: 'Tropical Fish' },
  { emoji: '🐡', name: 'Blowfish' },
  { emoji: '🦈', name: 'Shark' },
  { emoji: '🐙', name: 'Octopus' },
  { emoji: '🦑', name: 'Squid' },
  { emoji: '🦀', name: 'Crab' },
  { emoji: '🦞', name: 'Lobster' },
  { emoji: '🦐', name: 'Shrimp' },
  { emoji: '🐚', name: 'Shell' },
  { emoji: '🐬', name: 'Dolphin' },
  { emoji: '🐋', name: 'Whale' },
  { emoji: '🐳', name: 'Spouting Whale' },
  { emoji: '🦭', name: 'Seal' },
  { emoji: '🪼', name: 'Jellyfish' },
  { emoji: '🐊', name: 'Crocodile' },
  { emoji: '🐢', name: 'Turtle' },
  { emoji: '🦆', name: 'Duck' },
  { emoji: '🦩', name: 'Flamingo' },
  { emoji: '🪸', name: 'Coral' },
];

function getFishWaitRange() {
  var base = 2000;
  var extra = Math.min(fishPatience * 400, 4000);
  return { min: base + extra, max: base + extra + 3000 };
}

function getBiteWindow() {
  return Math.max(1200 - fishPatience * 50, 600);
}

// === Pond helpers ===
function setPondState(state) {
  var pond = document.getElementById('fish-pond');
  var bobber = document.getElementById('fish-bobber');
  if (!pond || !bobber) return;

  pond.classList.remove('rippling');
  bobber.className = 'pond-bobber';

  if (state === 'waiting') {
    bobber.textContent = '🔴';
    bobber.classList.add('floating');
  } else if (state === 'bite') {
    bobber.classList.add('dipping');
    pond.classList.add('rippling');
  } else if (state === 'caught') {
    bobber.classList.add('caught-anim');
  } else {
    // idle / result — static
    bobber.textContent = '🔴';
  }
}

function startFishing() {
  fishState = 'waiting';
  setPondState('waiting');

  document.getElementById('fish-message').textContent = 'Watch the bobber...';
  document.getElementById('fish-message').className = '';
  var catchEl = document.getElementById('fish-catch-display');
  catchEl.className = '';
  catchEl.textContent = '';

  var range = getFishWaitRange();
  var waitTime = range.min + Math.random() * (range.max - range.min);

  fishWaitTimer = setTimeout(function() {
    if (fishState !== 'waiting') return;
    triggerBite();
  }, waitTime);
}

function triggerBite() {
  fishState = 'bite';
  setPondState('bite');

  document.getElementById('fish-message').textContent = 'NOW! Press SPACE!';
  document.getElementById('fish-message').classList.add('urgent');
  playSplashSound();

  var window_ = getBiteWindow();
  fishBiteTimer = setTimeout(function() {
    if (fishState !== 'bite') return;
    fishMissed();
  }, window_);
}

function playSplashSound() {
  playNote(200, 0.15, 'sine');
  setTimeout(function() { playNote(180, 0.1, 'sine'); }, 80);
}

function playCatchSound() {
  playNote(440, 0.15, 'sine');
  setTimeout(function() { playNote(554, 0.15, 'sine'); }, 100);
  setTimeout(function() { playNote(659, 0.2, 'sine'); }, 200);
}

function playScaredSound() {
  playNote(300, 0.2, 'sawtooth');
  setTimeout(function() { playNote(200, 0.3, 'sawtooth'); }, 100);
}

function handleFishingInput() {
  if (fishState === 'waiting') {
    fishTooEarly();
  } else if (fishState === 'bite') {
    fishCatchSuccess();
  }
}

function fishTooEarly() {
  clearTimeout(fishWaitTimer);
  clearTimeout(fishBiteTimer);
  fishState = 'result';
  fishPatience = 0;
  updateFishScore();

  playScaredSound();
  setPondState('idle');
  document.getElementById('fish-bobber').textContent = '😱';
  document.getElementById('fish-message').textContent = 'Too early! The fish got scared...';
  document.getElementById('fish-message').className = '';
  var catchEl = document.getElementById('fish-catch-display');
  catchEl.className = '';
  catchEl.textContent = '💨';

  setTimeout(function() {
    if (mode === 'fishing') { catchEl.textContent = ''; startFishing(); }
  }, 2000);
}

function fishMissed() {
  clearTimeout(fishWaitTimer);
  clearTimeout(fishBiteTimer);
  fishState = 'result';
  fishPatience = 0;
  updateFishScore();

  playWrongSound();
  setPondState('idle');
  document.getElementById('fish-bobber').textContent = '💨';
  document.getElementById('fish-message').textContent = 'Too slow! The fish escaped...';
  document.getElementById('fish-message').className = '';
  var catchEl = document.getElementById('fish-catch-display');
  catchEl.className = '';
  catchEl.textContent = '🐟💨';

  setTimeout(function() {
    if (mode === 'fishing') { catchEl.textContent = ''; startFishing(); }
  }, 2000);
}

function fishCatchSuccess() {
  clearTimeout(fishWaitTimer);
  clearTimeout(fishBiteTimer);
  fishState = 'result';

  fishPatience++;
  if (fishPatience > fishBestPatience) fishBestPatience = fishPatience;

  var caught = randomFrom(fishPool);
  fishCaught.push(caught);
  updateFishScore();

  playCatchSound();
  playWinMelody();
  changeBg();

  // Show the caught creature in the bobber spot
  var bobber = document.getElementById('fish-bobber');
  bobber.textContent = caught.emoji;
  setPondState('caught');

  // Big catch display
  var catchEl = document.getElementById('fish-catch-display');
  catchEl.textContent = caught.emoji;
  catchEl.className = '';
  void catchEl.offsetWidth;
  catchEl.className = 'caught-big';

  var msgEl = document.getElementById('fish-message');
  msgEl.textContent = 'You caught a ' + caught.name + '! 🎉';
  msgEl.classList.remove('urgent');
  msgEl.classList.add('caught-msg');

  var celebrationEmojis = ['🎉','🌟','⭐','✨','💫','🎊','👏', caught.emoji, caught.emoji, caught.emoji];
  spawnSparkles(18);
  for (var i = 0; i < 15; i++) {
    (function(idx) {
      setTimeout(function() {
        spawnFloatingEmoji(randomFrom(celebrationEmojis));
      }, idx * 80);
    })(i);
  }

  renderFishCollection();

  setTimeout(function() {
    if (mode === 'fishing') {
      catchEl.className = '';
      catchEl.textContent = '';
      msgEl.classList.remove('caught-msg');
      startFishing();
    }
  }, 3000);
}

function updateFishScore() {
  var el = document.getElementById('fish-score');
  var text = '🐟 Caught: ' + fishCaught.length;
  if (fishPatience > 0) text += '  \u00B7  🎯 Patience: ' + fishPatience;
  if (fishBestPatience > 1) text += '  \u00B7  ⭐ Best: ' + fishBestPatience;
  el.textContent = text;
}

function renderFishCollection() {
  var el = document.getElementById('fish-collection');
  var recent = fishCaught.slice(-20);
  el.textContent = recent.map(function(f) { return f.emoji; }).join(' ');
}

function stopFishing() {
  clearTimeout(fishWaitTimer);
  clearTimeout(fishBiteTimer);
  fishState = 'idle';
}
