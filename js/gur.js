/**
 * gur.js — Gur mode: type the word, track consecutive streak.
 */

let currentGurWord = null;
let gurTypedIndex = 0;
let gurStreak = 0;
let gurBestStreak = 0;

function loadNewWord() {
  const lang = getLang();
  currentGurWord = randomFrom(lang.wordList);
  gurTypedIndex = 0;
  document.getElementById('gur-emoji').textContent = currentGurWord.emoji;
  document.getElementById('target-word').textContent = currentGurWord.word.split('').join(' ');
  document.getElementById('word-hint').textContent = currentGurWord.hint;
  renderGurTyped();
  updateScoreDisplay();
  changeBg();
}

function renderGurTyped() {
  const w = currentGurWord.word;
  let html = '';
  for (let i = 0; i < w.length; i++) {
    if (i < gurTypedIndex) {
      html += `<span class="letter-correct">${w[i]}</span> `;
    } else {
      html += `<span class="letter-pending">_</span> `;
    }
  }
  document.getElementById('typed-word').innerHTML = html;
}

function updateScoreDisplay() {
  const lang = getLang();
  const el = document.getElementById('score-display');
  let text = `🔥 ${lang.ui.streak}: ${gurStreak}`;
  if (gurBestStreak > 0) text += `  ·  ⭐ ${lang.ui.best}: ${gurBestStreak}`;
  el.textContent = text;
}

function bumpScore() {
  const el = document.getElementById('score-display');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function handleGur(key) {
  if (!currentGurWord) return;
  const lang = getLang();
  const normalized = lang.normalizeKey(key);
  const expected = currentGurWord.word[gurTypedIndex];

  if (normalized === expected) {
    gurTypedIndex++;
    playCorrectSound();
    spawnSparkles(4);
    spawnFloatingEmoji(currentGurWord.emoji);
    renderGurTyped();

    if (gurTypedIndex >= currentGurWord.word.length) {
      gurStreak++;
      if (gurStreak > gurBestStreak) gurBestStreak = gurStreak;
      updateScoreDisplay();
      bumpScore();
      changeBg();
      playWinMelody();
      setTimeout(() => speakWord(currentGurWord.word), 600);
      showCelebration(currentGurWord.emoji, currentGurWord.word);
      setTimeout(() => { hideCelebration(); loadNewWord(); }, celebrationDuration);
    }
  } else {
    gurStreak = 0;
    updateScoreDisplay();
    playWrongSound();
    const tw = document.getElementById('target-word');
    tw.style.color = 'var(--wrong)';
    setTimeout(() => tw.style.color = 'var(--text)', 400);
  }
}

function showCelebration(emoji, word) {
  const lang = getLang();
  const celebration = document.getElementById('celebration');
  celebration.innerHTML = `<div style="text-align:center">
    <div style="font-size:clamp(4rem,14vw,8rem)">${emoji}</div>
    <div style="font-size:clamp(1.6rem,5vw,3rem);color:var(--celebration-text);margin-top:10px">🎉 ${word}! 🎉</div>
    <div style="font-size:clamp(1rem,3vw,1.5rem);color:var(--celebration-sub);margin-top:8px">${lang.ui.greatJob}  ${lang.ui.streak}: ${gurStreak} 🔥</div>
  </div>`;
  celebration.classList.add('show');
  for (let i = 0; i < 12; i++) {
    setTimeout(() => spawnFloatingEmoji(randomFrom(['🎉','🌟','⭐','🎊','👏','💫', emoji])), i * 100);
  }
  spawnSparkles(15);
}

function hideCelebration() {
  document.getElementById('celebration').classList.remove('show');
}
