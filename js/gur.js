/**
 * gur.js — Gur mode: type the word, track consecutive streak.
 * Emoji Only mode activates when streak >= emojiOnlyThreshold.
 */

let currentGurWord = null;
let gurTypedIndex = 0;
let gurStreak = 0;
let gurBestStreak = 0;
let emojiOnlyActive = false;

function isEmojiOnly() {
  return gurStreak >= emojiOnlyThreshold;
}

function updateEmojiOnlyState() {
  const wasActive = emojiOnlyActive;
  emojiOnlyActive = isEmojiOnly();
  const tw = document.getElementById('target-word');
  const lang = getLang();
  const subtitle = document.getElementById('gur-subtitle');

  if (emojiOnlyActive) {
    tw.classList.add('hidden-word');
    subtitle.textContent = lang.ui.emojiOnlySubtitle;
    if (!wasActive) showEmojiOnlyBanner();
  } else {
    tw.classList.remove('hidden-word');
    subtitle.textContent = lang.ui.gurSubtitleNormal;
  }
}

function showEmojiOnlyBanner() {
  var lang = getLang();
  var banner = document.getElementById('emoji-only-banner');
  banner.textContent = lang.ui.emojiOnlyBanner;
  banner.classList.remove('show');
  void banner.offsetWidth;
  banner.classList.add('show');
  spawnSparkles(12);
  for (var i = 0; i < 6; i++) {
    setTimeout(function() { spawnFloatingEmoji(randomFrom(['🧠','⭐','🔥','💪','🌟','✨'])); }, i * 120);
  }
  setTimeout(function() { banner.classList.remove('show'); }, 2000);
}

function loadNewWord() {
  var lang = getLang();
  currentGurWord = randomFrom(lang.wordList);
  gurTypedIndex = 0;
  document.getElementById('gur-emoji').textContent = currentGurWord.emoji;
  document.getElementById('target-word').textContent = currentGurWord.word.split('').join(' ');
  document.getElementById('word-hint').textContent = currentGurWord.hint;
  renderGurTyped();
  updateScoreDisplay();
  updateEmojiOnlyState();
  changeBg();
}

function renderGurTyped() {
  var w = currentGurWord.word;
  var html = '';
  for (var i = 0; i < w.length; i++) {
    if (i < gurTypedIndex) {
      html += '<span class="letter-correct">' + w[i] + '</span> ';
    } else {
      html += '<span class="letter-pending">_</span> ';
    }
  }
  document.getElementById('typed-word').innerHTML = html;
}

function updateScoreDisplay() {
  var lang = getLang();
  var el = document.getElementById('score-display');
  var text = '🔥 ' + lang.ui.streak + ': ' + gurStreak;
  if (gurBestStreak > 0) text += '  \u00B7  ⭐ ' + lang.ui.best + ': ' + gurBestStreak;
  if (emojiOnlyActive) text += '  \u00B7  🧠';
  el.textContent = text;
}

function bumpScore() {
  var el = document.getElementById('score-display');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function handleGur(key) {
  if (!currentGurWord) return;
  var lang = getLang();
  var normalized = lang.normalizeKey(key);
  var expected = currentGurWord.word[gurTypedIndex];

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
      setTimeout(function() { speakWord(currentGurWord.word); }, 600);
      showCelebration(currentGurWord.emoji, currentGurWord.word);
      setTimeout(function() { hideCelebration(); loadNewWord(); }, celebrationDuration);
    }
  } else {
    var prevEmojiOnly = emojiOnlyActive;
    gurStreak = 0;
    updateScoreDisplay();
    updateEmojiOnlyState();
    playWrongSound();
    var tw = document.getElementById('target-word');
    tw.style.color = 'var(--wrong)';
    setTimeout(function() { tw.style.color = 'var(--text)'; }, 400);
  }
}

function showCelebration(emoji, word) {
  var lang = getLang();
  var celebration = document.getElementById('celebration');
  var modeTag = isEmojiOnly() ? ' 🧠' : '';
  celebration.innerHTML = '<div style="text-align:center">' +
    '<div style="font-size:clamp(4rem,14vw,8rem)">' + emoji + '</div>' +
    '<div style="font-size:clamp(1.6rem,5vw,3rem);color:var(--celebration-text);margin-top:10px">🎉 ' + word + '! 🎉</div>' +
    '<div style="font-size:clamp(1rem,3vw,1.5rem);color:var(--celebration-sub);margin-top:8px">' + lang.ui.greatJob + '  ' + lang.ui.streak + ': ' + gurStreak + ' 🔥' + modeTag + '</div>' +
    '</div>';
  celebration.classList.add('show');
  for (var i = 0; i < 12; i++) {
    setTimeout(function() { spawnFloatingEmoji(randomFrom(['🎉','🌟','⭐','🎊','👏','💫', emoji])); }, i * 100);
  }
  spawnSparkles(15);
}

function hideCelebration() {
  document.getElementById('celebration').classList.remove('show');
}
