/**
 * geffen.js — Geffen mode: press a key, see an emoji and letter.
 */

function handleGeffen(key) {
  const upper = key.toUpperCase();
  let emoji, word;

  if (letterEmojis[upper]) {
    emoji = randomFrom(letterEmojis[upper]);
    word = emojiNames[emoji] || '';
  } else {
    emoji = randomFrom(nonLetterEmojis);
    word = '';
  }

  const emojiDisplay = document.getElementById('emoji-display');
  emojiDisplay.textContent = emoji;
  emojiDisplay.classList.remove('bounce');
  void emojiDisplay.offsetWidth;
  emojiDisplay.classList.add('bounce');

  document.getElementById('letter-display').textContent = upper.length === 1 ? upper : '🎵';
  document.getElementById('word-display').textContent = word;
  changeBg();
  playHappySound();

  for (let i = 0; i < 3; i++) {
    setTimeout(() => spawnFloatingEmoji(randomFrom(letterEmojis[upper] || nonLetterEmojis)), i * 100);
  }
  spawnSparkles(6);
}
