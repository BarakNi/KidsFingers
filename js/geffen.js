/**
 * geffen.js — Geffen mode: press a key, see an emoji and letter.
 */

function handleGeffen(key) {
  const lang = getLang();
  const normalized = lang.normalizeKey(key);
  let emoji, word;

  if (lang.letterEmojis[normalized]) {
    emoji = randomFrom(lang.letterEmojis[normalized]);
    word = lang.emojiNames[emoji] || '';
  } else {
    emoji = randomFrom(nonLetterEmojis);
    word = '';
  }

  const emojiDisplay = document.getElementById('emoji-display');
  emojiDisplay.textContent = emoji;
  emojiDisplay.classList.remove('bounce');
  void emojiDisplay.offsetWidth;
  emojiDisplay.classList.add('bounce');

  document.getElementById('letter-display').textContent = normalized.length === 1 ? normalized : '🎵';
  document.getElementById('word-display').textContent = word;
  changeBg();
  playHappySound();

  for (let i = 0; i < 3; i++) {
    setTimeout(() => spawnFloatingEmoji(randomFrom(lang.letterEmojis[normalized] || nonLetterEmojis)), i * 100);
  }
  spawnSparkles(6);
}
