/**
 * audio.js — Sound effects and text-to-speech.
 */

let audioCtx;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playNote(freq, duration, type) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type || 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function playHappySound() {
  const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
  playNote(notes[Math.floor(Math.random() * notes.length)], 0.35, 'triangle');
}

function playCorrectSound() { playNote(523.25, 0.15, 'sine'); }
function playWrongSound() { playNote(150, 0.3, 'sawtooth'); }

function playWinMelody() {
  [0, 150, 300, 450, 700].forEach((delay, i) => {
    setTimeout(() => playNote([523.25, 587.33, 659.25, 783.99, 1046.5][i], 0.3, 'sine'), delay);
  });
}

function speakWord(word) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const lang = getLang();
  const utter = new SpeechSynthesisUtterance(word);
  utter.rate = speechRate;
  utter.pitch = speechPitch;
  utter.lang = lang.speechLang;
  const voices = window.speechSynthesis.getVoices();
  const langPrefix = lang.speechLang.split('-')[0];
  const preferred = voices.find(v => v.lang === lang.speechLang)
    || voices.find(v => v.lang.startsWith(langPrefix));
  if (preferred) utter.voice = preferred;
  window.speechSynthesis.speak(utter);
}

// Preload voices
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}
