/**
 * config.js - All tunable game settings.
 */
let gameLang = 'en';

var nonLetterEmojis = ['🎈','🎉','🎊','🎁','🎵','🎶','🚀','🛸','🌀','🎪','🎠','🎡','🎢','🪅','🎆','🎇'];

// ===== ENGLISH =====
var langEN = {
  letterEmojis: {
    A: ['🍎','🐜'], B: ['🐻','🍌','🦋'], C: ['🐱','🚗','🧁'],
    D: ['🐶','🐬','🦆'], E: ['🐘','🦅','🥚'], F: ['🐸','🔥','🐟'],
    G: ['🦒','🍇','👻'], H: ['🐴','🏠','💖'], I: ['🍦','🦎','🧊'],
    J: ['🤹','🕹️','🪼'], K: ['🦘','🪁','👑'], L: ['🦁','🍋','🐞'],
    M: ['🐵','🌙','🍈'], N: ['🥜','📰','🪺'], O: ['🐙','🍊','🦉'],
    P: ['🐼','🍕','🐧'], Q: ['👸','❓','🪶'], R: ['🐰','🌈','🤖'],
    S: ['🐍','⭐','🍓'], T: ['🐯','🌮','🐢'], U: ['🦄','☂️','🪈'],
    V: ['🌋','🎻','🏐'], W: ['🐳','🍉','🐺'], X: ['❌','🎄'],
    Y: ['🪀','💛','🧶'], Z: ['🦓','⚡','🧟']
  },
  emojiNames: {
    '🍎':'Apple','🐜':'Ant','🐻':'Bear','🍌':'Banana','🦋':'Butterfly',
    '🐱':'Cat','🚗':'Car','🧁':'Cupcake','🐶':'Dog','🐬':'Dolphin','🦆':'Duck',
    '🐘':'Elephant','🦅':'Eagle','🥚':'Egg','🐸':'Frog','🔥':'Fire','🐟':'Fish',
    '🦒':'Giraffe','🍇':'Grapes','👻':'Ghost','🐴':'Horse','🏠':'House','💖':'Heart',
    '🍦':'Ice cream','🦎':'Iguana','🧊':'Ice','🤹':'Juggler','🕹️':'Joystick','🪼':'Jellyfish',
    '🦘':'Kangaroo','🪁':'Kite','👑':'King','🦁':'Lion','🍋':'Lemon','🐞':'Ladybug',
    '🐵':'Monkey','🌙':'Moon','🍈':'Melon','🥜':'Nut','📰':'Newspaper','🪺':'Nest',
    '🐙':'Octopus','🍊':'Orange','🦉':'Owl','🐼':'Panda','🍕':'Pizza','🐧':'Penguin',
    '👸':'Queen','❓':'Question','🪶':'Quill','🐰':'Rabbit','🌈':'Rainbow','🤖':'Robot',
    '🐍':'Snake','⭐':'Star','🍓':'Strawberry','🐯':'Tiger','🌮':'Taco','🐢':'Turtle',
    '🦄':'Unicorn','☂️':'Umbrella','🪈':'Flute','🌋':'Volcano','🎻':'Violin','🏐':'Volleyball',
    '🐳':'Whale','🍉':'Watermelon','🐺':'Wolf','❌':'X mark','🎄':'Xmas tree',
    '🪀':'Yo-yo','💛':'Yellow heart','🧶':'Yarn','🦓':'Zebra','⚡':'Zap','🧟':'Zombie'
  },
  wordList: [
    { word: 'CAT', emoji: '🐱', hint: 'A small furry pet that says meow!' },
    { word: 'DOG', emoji: '🐶', hint: 'A friendly pet that says woof!' },
    { word: 'SUN', emoji: '☀️', hint: 'It shines bright in the sky!' },
    { word: 'FISH', emoji: '🐟', hint: 'It swims in the water!' },
    { word: 'BIRD', emoji: '🐦', hint: 'It flies in the sky!' },
    { word: 'STAR', emoji: '⭐', hint: 'It twinkles at night!' },
    { word: 'TREE', emoji: '🌳', hint: 'It is tall and green!' },
    { word: 'BALL', emoji: '⚽', hint: 'You kick it or throw it!' },
    { word: 'CAKE', emoji: '🎂', hint: 'You eat it on your birthday!' },
    { word: 'MOON', emoji: '🌙', hint: 'You see it at night!' },
    { word: 'FROG', emoji: '🐸', hint: 'It jumps and says ribbit!' },
    { word: 'BEAR', emoji: '🐻', hint: 'A big animal in the forest!' },
    { word: 'DUCK', emoji: '🦆', hint: 'It swims and says quack!' },
    { word: 'LION', emoji: '🦁', hint: 'The king of the jungle!' },
    { word: 'RAIN', emoji: '🌧️', hint: 'Water falling from clouds!' },
    { word: 'APPLE', emoji: '🍎', hint: 'A red fruit you can eat!' },
    { word: 'HOUSE', emoji: '🏠', hint: 'You live inside it!' },
    { word: 'HEART', emoji: '❤️', hint: 'A shape that means love!' },
    { word: 'HORSE', emoji: '🐴', hint: 'You can ride on it!' },
    { word: 'TRAIN', emoji: '🚂', hint: 'It goes choo choo on tracks!' },
    { word: 'WATER', emoji: '💧', hint: 'You drink it every day!' },
    { word: 'FLOWER', emoji: '🌸', hint: 'It is pretty and grows in gardens!' },
    { word: 'BANANA', emoji: '🍌', hint: 'A yellow fruit monkeys love!' },
    { word: 'RABBIT', emoji: '🐰', hint: 'It has long ears and hops!' },
    { word: 'ROCKET', emoji: '🚀', hint: 'It flies to space!' },
  ],
  speechLang: 'en-US',
  isLetter: function(key) { return /[a-zA-Z]/.test(key); },
  normalizeKey: function(key) { return key.toUpperCase(); },
  ui: {
    gefTitle: "🌟 Geffen's Game 🌟",
    gefSubtitle: "Press a key \u2014 then lift your finger!",
    gurTitle: "📚 Gur's Game 📚",
    gurSubtitle: "Type the word you see!",
    liftPrompt: "☝️ Lift your finger!<br>Then press again!",
    streak: "Streak",
    best: "Best",
    greatJob: "Great job! 👏",
    emojiOnlyBanner: "🧠 Emoji Only Mode!",
    emojiOnlySubtitle: "You know these words! Type from the emoji!",
    gurSubtitleNormal: "Type the word you see!"
  },
  dir: 'ltr'
};

// ===== HEBREW =====
// RULE: Each letter's emojis represent words that START with that Hebrew letter.
var langHE = {
  letterEmojis: {
    '\u05D0': ['🦁','🐰','🪿','🦌'],
    '\u05D1': ['🦆','🐄','🦬'],
    '\u05D2': ['🦒','🐫','🦍','🐐'],
    '\u05D3': ['🐻','🐬','🐝','🐟','🦕'],
    '\u05D4': ['🦛'],
    '\u05D5': ['🌹'],
    '\u05D6': ['🦓','🪰','🦎'],
    '\u05D7': ['🐱','🫏','🐷','🐌','🐞'],
    '\u05D8': ['🦚','🐑'],
    '\u05D9': ['🕊️','🦉'],
    '\u05DB': ['🐶','🦈'],
    '\u05DC': ['🐋'],
    '\u05DE': ['🪼','🐹'],
    '\u05E0': ['🐍','🐜','🐆','🦅'],
    '\u05E1': ['🐴','🐿️','🦀'],
    '\u05E2': ['🕷️','🦂','🦇','🐭'],
    '\u05E4': ['🦋','🐘','🐧'],
    '\u05E6': ['🐢','🐸','🐦','🦌'],
    '\u05E7': ['🐵','🦔','🦘'],
    '\u05E8': ['🤖'],
    '\u05E9': ['🦊','🐇','🐒'],
    '\u05EA': ['🦜','🐊','🐓','🪱'],
    '\u05DA': ['🐶','🦈'],
    '\u05DD': ['🪼','🐹'],
    '\u05DF': ['🐍','🐜','🐆','🦅'],
    '\u05E3': ['🦋','🐘','🐧'],
    '\u05E5': ['🐢','🐸','🐦','🦌']
  },
  emojiNames: {
    '🦁':'\u05D0\u05E8\u05D9\u05D4',
    '🐰':'\u05D0\u05E8\u05E0\u05D1',
    '🪿':'\u05D0\u05D5\u05D5\u05D6',
    '🦆':'\u05D1\u05E8\u05D5\u05D5\u05D6',
    '🐄':'\u05D1\u05E7\u05E8',
    '🦬':'\u05D1\u05D5\u05E4\u05DC\u05D5',
    '🦒':'\u05D2\u05F3\u05D9\u05E8\u05E4\u05D4',
    '🐫':'\u05D2\u05DE\u05DC',
    '🦍':'\u05D2\u05D5\u05E8\u05D9\u05DC\u05D4',
    '🐐':'\u05D2\u05D3\u05D9',
    '🐻':'\u05D3\u05D5\u05D1',
    '🐬':'\u05D3\u05D5\u05DC\u05E4\u05D9\u05DF',
    '🐝':'\u05D3\u05D1\u05D5\u05E8\u05D4',
    '🐟':'\u05D3\u05D2',
    '🦕':'\u05D3\u05D9\u05E0\u05D5\u05D6\u05D0\u05D5\u05E8',
    '🦛':'\u05D4\u05D9\u05E4\u05D5\u05E4\u05D5\u05D8\u05DD',
    '🌹':'\u05D5\u05E8\u05D3',
    '🦓':'\u05D6\u05D1\u05E8\u05D4',
    '🪰':'\u05D6\u05D1\u05D5\u05D1',
    '🦎':'\u05D6\u05D9\u05E7\u05D9\u05EA',
    '🐱':'\u05D7\u05EA\u05D5\u05DC',
    '🫏':'\u05D7\u05DE\u05D5\u05E8',
    '🐷':'\u05D7\u05D6\u05D9\u05E8',
    '🐌':'\u05D7\u05D9\u05DC\u05D6\u05D5\u05DF',
    '🐞':'\u05D7\u05D9\u05E4\u05D5\u05E9\u05D9\u05EA',
    '🦚':'\u05D8\u05D5\u05D5\u05E1',
    '🐑':'\u05D8\u05DC\u05D4',
    '🕊️':'\u05D9\u05D5\u05E0\u05D4',
    '🦉':'\u05D9\u05E0\u05E9\u05D5\u05E3',
    '🐶':'\u05DB\u05DC\u05D1',
    '🦈':'\u05DB\u05E8\u05D9\u05E9',
    '🐋':'\u05DC\u05D5\u05D5\u05D9\u05EA\u05DF',
    '🪼':'\u05DE\u05D3\u05D5\u05D6\u05D4',
    '🐹':'\u05DE\u05DB\u05E8\u05E1\u05DD',
    '🐍':'\u05E0\u05D7\u05E9',
    '🐜':'\u05E0\u05DE\u05DC\u05D4',
    '🐆':'\u05E0\u05DE\u05E8',
    '🦅':'\u05E0\u05E9\u05E8',
    '🐴':'\u05E1\u05D5\u05E1',
    '🐿️':'\u05E1\u05E0\u05D0\u05D9',
    '🦀':'\u05E1\u05E8\u05D8\u05DF',
    '🕷️':'\u05E2\u05DB\u05D1\u05D9\u05E9',
    '🦂':'\u05E2\u05E7\u05E8\u05D1',
    '🦇':'\u05E2\u05D8\u05DC\u05E3',
    '🐭':'\u05E2\u05DB\u05D1\u05E8',
    '🦋':'\u05E4\u05E8\u05E4\u05E8',
    '🐘':'\u05E4\u05D9\u05DC',
    '🐧':'\u05E4\u05D9\u05E0\u05D2\u05D5\u05D5\u05D9\u05DF',
    '🐢':'\u05E6\u05D1',
    '🐸':'\u05E6\u05E4\u05E8\u05D3\u05E2',
    '🐦':'\u05E6\u05D9\u05E4\u05D5\u05E8',
    '🦌':'\u05E6\u05D1\u05D9',
    '🐵':'\u05E7\u05D5\u05E3',
    '🦔':'\u05E7\u05D9\u05E4\u05D5\u05D3',
    '🦘':'\u05E7\u05E0\u05D2\u05D5\u05E8\u05D5',
    '🤖':'\u05E8\u05D5\u05D1\u05D5\u05D8',
    '🦊':'\u05E9\u05D5\u05E2\u05DC',
    '🐇':'\u05E9\u05E4\u05DF',
    '🐒':'\u05E9\u05D9\u05DE\u05E4\u05E0\u05D6\u05D4',
    '🦜':'\u05EA\u05D5\u05DB\u05D9',
    '🐊':'\u05EA\u05E0\u05D9\u05DF',
    '🐓':'\u05EA\u05E8\u05E0\u05D2\u05D5\u05DC',
    '🪱':'\u05EA\u05D5\u05DC\u05E2\u05EA'
  },
  wordList: [
    { word: '\u05D3\u05D2', emoji: '🐟', hint: '!\u05D4\u05D5\u05D0 \u05E9\u05D5\u05D7\u05D4 \u05D1\u05DE\u05D9\u05DD' },
    { word: '\u05DB\u05DC\u05D1', emoji: '🐶', hint: '!\u05D7\u05D1\u05E8 \u05E0\u05D0\u05DE\u05DF \u05E9\u05D0\u05D5\u05DE\u05E8 \u05D4\u05D1 \u05D4\u05D1' },
    { word: '\u05D7\u05EA\u05D5\u05DC', emoji: '🐱', hint: '!\u05D7\u05D9\u05D9\u05EA \u05DE\u05D7\u05DE\u05D3 \u05E9\u05D0\u05D5\u05DE\u05E8\u05EA \u05DE\u05D9\u05D0\u05D5' },
    { word: '\u05D3\u05D5\u05D1', emoji: '🐻', hint: '!\u05D7\u05D9\u05D4 \u05D2\u05D3\u05D5\u05DC\u05D4 \u05D1\u05D9\u05E2\u05E8' },
    { word: '\u05D0\u05E8\u05D9\u05D4', emoji: '🦁', hint: '!\u05DE\u05DC\u05DA \u05D4\u05D7\u05D9\u05D5\u05EA' },
    { word: '\u05E6\u05D1', emoji: '🐢', hint: '!\u05D4\u05D5\u05D0 \u05D0\u05D9\u05D8\u05D9 \u05E2\u05DD \u05E9\u05E8\u05D9\u05D5\u05DF' },
    { word: '\u05E1\u05D5\u05E1', emoji: '🐴', hint: '!\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E8\u05DB\u05D1 \u05E2\u05DC\u05D9\u05D5' },
    { word: '\u05E7\u05D5\u05E3', emoji: '🐵', hint: '!\u05D4\u05D5\u05D0 \u05DE\u05D8\u05E4\u05E1 \u05E2\u05DC \u05E2\u05E6\u05D9\u05DD' },
    { word: '\u05E0\u05D7\u05E9', emoji: '🐍', hint: '!\u05D4\u05D5\u05D0 \u05D6\u05D5\u05D7\u05DC \u05E2\u05DC \u05D4\u05D0\u05E8\u05E5' },
    { word: '\u05E4\u05D9\u05DC', emoji: '🐘', hint: '!\u05D7\u05D9\u05D4 \u05E2\u05E0\u05E7\u05D9\u05EA \u05E2\u05DD \u05D7\u05D3\u05E7' },
    { word: '\u05D0\u05E8\u05E0\u05D1', emoji: '🐰', hint: '!\u05D9\u05E9 \u05DC\u05D5 \u05D0\u05D5\u05D6\u05E0\u05D9\u05D9\u05DD \u05D0\u05E8\u05D5\u05DB\u05D5\u05EA' },
    { word: '\u05D1\u05E8\u05D5\u05D5\u05D6', emoji: '🦆', hint: '!\u05D4\u05D5\u05D0 \u05E9\u05D5\u05D7\u05D4 \u05D5\u05D0\u05D5\u05DE\u05E8 \u05E7\u05D5\u05D5\u05E7' },
    { word: '\u05D6\u05D1\u05E8\u05D4', emoji: '🦓', hint: '!\u05D7\u05D9\u05D4 \u05E2\u05DD \u05E4\u05E1\u05D9\u05DD' },
    { word: '\u05E9\u05D5\u05E2\u05DC', emoji: '🦊', hint: '!\u05D7\u05D9\u05D4 \u05E2\u05E8\u05DE\u05D5\u05DE\u05D9\u05EA' },
    { word: '\u05D2\u05DE\u05DC', emoji: '🐫', hint: '!\u05D4\u05D5\u05D0 \u05D4\u05D5\u05DC\u05DA \u05D1\u05DE\u05D3\u05D1\u05E8' },
    { word: '\u05E4\u05E8\u05E4\u05E8', emoji: '🦋', hint: '!\u05D4\u05D5\u05D0 \u05E2\u05E3 \u05E2\u05DD \u05DB\u05E0\u05E4\u05D9\u05D9\u05DD \u05D9\u05E4\u05D5\u05EA' },
    { word: '\u05D2\u05F3\u05D9\u05E8\u05E4\u05D4', emoji: '🦒', hint: '!\u05D4\u05D7\u05D9\u05D4 \u05D4\u05DB\u05D9 \u05D2\u05D1\u05D5\u05D4\u05D4' },
    { word: '\u05EA\u05E0\u05D9\u05DF', emoji: '🐊', hint: '!\u05D4\u05D5\u05D0 \u05D7\u05D9 \u05D1\u05DE\u05D9\u05DD' },
    { word: '\u05EA\u05D5\u05DB\u05D9', emoji: '🦜', hint: '!\u05E6\u05D9\u05E4\u05D5\u05E8 \u05E6\u05D1\u05E2\u05D5\u05E0\u05D9 \u05E9\u05DE\u05D3\u05D1\u05E8' },
    { word: '\u05D7\u05DE\u05D5\u05E8', emoji: '🫏', hint: '!\u05D7\u05D9\u05D4 \u05E2\u05E7\u05E9\u05E0\u05D9\u05EA' },
    { word: '\u05D3\u05D5\u05DC\u05E4\u05D9\u05DF', emoji: '🐬', hint: '!\u05D4\u05D5\u05D0 \u05E9\u05D5\u05D7\u05D4 \u05D5\u05E7\u05D5\u05E4\u05E5' },
    { word: '\u05E0\u05DE\u05E8', emoji: '🐆', hint: '!\u05D7\u05D9\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05E2\u05DD \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA' },
    { word: '\u05E6\u05E4\u05E8\u05D3\u05E2', emoji: '🐸', hint: '!\u05D4\u05D9\u05D0 \u05E7\u05D5\u05E4\u05E6\u05EA \u05D5\u05D0\u05D5\u05DE\u05E8\u05EA \u05E7\u05E8\u05D5\u05E7' },
    { word: '\u05E7\u05E0\u05D2\u05D5\u05E8\u05D5', emoji: '🦘', hint: '!\u05D4\u05D5\u05D0 \u05E7\u05D5\u05E4\u05E5 \u05E2\u05DD \u05DB\u05D9\u05E1' },
    { word: '\u05D9\u05D5\u05E0\u05D4', emoji: '🕊️', hint: '!\u05E6\u05D9\u05E4\u05D5\u05E8 \u05E9\u05DC \u05E9\u05DC\u05D5\u05DD' },
  ],
  speechLang: 'he-IL',
  isLetter: function(key) { return /[\u0590-\u05FF]/.test(key); },
  normalizeKey: function(key) { return key; },
  ui: {
    gefTitle: "🌟 \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E9\u05DC \u05D2\u05E4\u05DF 🌟",
    gefSubtitle: "!\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC \u05DE\u05E7\u05E9 \u2014 \u05D5\u05D0\u05D6 \u05D4\u05E8\u05D9\u05DE\u05D5 \u05D0\u05EA \u05D4\u05D0\u05E6\u05D1\u05E2",
    gurTitle: "📚 \u05D4\u05DE\u05E9\u05D7\u05E7 \u05E9\u05DC \u05D2\u05D5\u05E8 📚",
    gurSubtitle: "!\u05D4\u05E7\u05DC\u05D9\u05D3\u05D5 \u05D0\u05EA \u05D4\u05DE\u05D9\u05DC\u05D4 \u05E9\u05D0\u05EA\u05DD \u05E8\u05D5\u05D0\u05D9\u05DD",
    liftPrompt: "!☝️ \u05D4\u05E8\u05D9\u05DE\u05D5 \u05D0\u05EA \u05D4\u05D0\u05E6\u05D1\u05E2<br>!\u05D5\u05D0\u05D6 \u05DC\u05D7\u05E6\u05D5 \u05E9\u05D5\u05D1",
    streak: "\u05E8\u05E6\u05E3",
    best: "\u05E9\u05D9\u05D0",
    greatJob: "!👏 \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3",
    emojiOnlyBanner: "!🧠 \u05DE\u05E6\u05D1 \u05D0\u05DE\u05D5\u05D2\u05F3\u05D9 \u05D1\u05DC\u05D1\u05D3",
    emojiOnlySubtitle: "!\u05D0\u05EA\u05DD \u05DE\u05DB\u05D9\u05E8\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05D9\u05DC\u05D9\u05DD! \u05D4\u05E7\u05DC\u05D9\u05D3\u05D5 \u05DC\u05E4\u05D9 \u05D4\u05D0\u05DE\u05D5\u05D2\u05F3\u05D9",
    gurSubtitleNormal: "!\u05D4\u05E7\u05DC\u05D9\u05D3\u05D5 \u05D0\u05EA \u05D4\u05DE\u05D9\u05DC\u05D4 \u05E9\u05D0\u05EA\u05DD \u05E8\u05D5\u05D0\u05D9\u05DD"
  },
  dir: 'rtl'
};

// ===== Background gradients =====
var bgColorsLight = [
  'linear-gradient(135deg, #f5f0e8 0%, #e8e0d4 100%)',
  'linear-gradient(135deg, #f0ebe3 0%, #e4ddd2 100%)',
  'linear-gradient(135deg, #eee8df 0%, #e0d8cc 100%)',
  'linear-gradient(135deg, #f2ece2 0%, #e6dfd4 100%)',
  'linear-gradient(135deg, #ede7dc 0%, #dfd8cd 100%)',
  'linear-gradient(135deg, #f4efe6 0%, #e8e2d8 100%)',
  'linear-gradient(135deg, #f0e9de 0%, #e2dbd0 100%)',
  'linear-gradient(135deg, #f3ede4 0%, #e5ded3 100%)',
];
var bgColorsDark = [
  'linear-gradient(135deg, #1c1b1a 0%, #2a2826 100%)',
  'linear-gradient(135deg, #1e1c1a 0%, #28261f 100%)',
  'linear-gradient(135deg, #1a1918 0%, #262420 100%)',
  'linear-gradient(135deg, #1d1b19 0%, #2a2722 100%)',
  'linear-gradient(135deg, #1b1a18 0%, #272520 100%)',
  'linear-gradient(135deg, #1c1a18 0%, #292622 100%)',
];

// ===== Sparkle colors =====
var sparkleColorsLight = ['#d4c8b8','#c8bca8','#beb2a0','#d0c4b4','#c4b8a8','#dcd0c0','#c8bcac','#d8ccbc','#ccc0b0','#c0b4a4'];
var sparkleColorsDark = ['#6b5e52','#5c5044','#7a6e60','#685c50','#5e5246','#746858','#6a5e50','#7c7060','#645848','#706454'];

// ===== Speech settings =====
var speechRate = 0.85;
var speechPitch = 1.1;

// ===== Timing (ms) =====
var holdPromptDelay = 800;
var celebrationDuration = 2500;
var emojiOnlyThreshold = 5;

// ===== Helper =====
function getLang() { return gameLang === 'he' ? langHE : langEN; }
