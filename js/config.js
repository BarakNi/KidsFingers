/**
 * config.js — All tunable game settings.
 * Edit these to customize the game without touching logic code.
 */

// ===== Active language ('en' or 'he') =====
let gameLang = 'en';

// ===== Emojis shown for non-letter keys =====
const nonLetterEmojis = [
  '🎈','🎉','🎊','🎁','🎵','🎶','🚀','🛸',
  '🌀','🎪','🎠','🎡','🎢','🪅','🎆','🎇'
];

// ===== ENGLISH =====
const langEN = {
  letterEmojis: {
    A: ['🍎','🐜','✈️'], B: ['🐻','🍌','🦋'], C: ['🐱','🚗','🧁'],
    D: ['🐶','🐬','🦆'], E: ['🐘','🦅','🥚'], F: ['🐸','🔥','🐟'],
    G: ['🦒','🍇','👻'], H: ['🐴','🏠','💖'], I: ['🍦','🦎','🧊'],
    J: ['🤹','🕹️','🪼'], K: ['🦘','🪁','👑'], L: ['🦁','🍋','🐞'],
    M: ['🐵','🌙','🍈'], N: ['🥜','📰','🪺'], O: ['🐙','🍊','🦉'],
    P: ['🐼','🍕','🐧'], Q: ['👸','❓','🪶'], R: ['🐰','🌈','🤖'],
    S: ['🐍','⭐','🍓'], T: ['🐯','🌮','🐢'], U: ['🦄','☂️','🪈'],
    V: ['🌋','🎻','🏐'], W: ['🐳','🍉','🐺'], X: ['❌','🎄','✖️'],
    Y: ['🪀','💛','🧶'], Z: ['🦓','⚡','🧟']
  },
  emojiNames: {
    '🍎':'Apple','🐜':'Ant','✈️':'Airplane','🐻':'Bear','🍌':'Banana','🦋':'Butterfly',
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
    '🐳':'Whale','🍉':'Watermelon','🐺':'Wolf','❌':'X mark','🎄':'Xmas tree','✖️':'X',
    '🪀':'Yo-yo','💛':'Yellow heart','🧶':'Yarn','🦓':'Zebra','⚡':'Zap','🧟':'Zombie'
  },
  wordList: [
    { word: 'CAT',    emoji: '🐱', hint: 'A small furry pet that says meow!' },
    { word: 'DOG',    emoji: '🐶', hint: 'A friendly pet that says woof!' },
    { word: 'SUN',    emoji: '☀️', hint: 'It shines bright in the sky!' },
    { word: 'FISH',   emoji: '🐟', hint: 'It swims in the water!' },
    { word: 'BIRD',   emoji: '🐦', hint: 'It flies in the sky!' },
    { word: 'STAR',   emoji: '⭐', hint: 'It twinkles at night!' },
    { word: 'TREE',   emoji: '🌳', hint: 'It is tall and green!' },
    { word: 'BALL',   emoji: '⚽', hint: 'You kick it or throw it!' },
    { word: 'CAKE',   emoji: '🎂', hint: 'You eat it on your birthday!' },
    { word: 'MOON',   emoji: '🌙', hint: 'You see it at night!' },
    { word: 'FROG',   emoji: '🐸', hint: 'It jumps and says ribbit!' },
    { word: 'BEAR',   emoji: '🐻', hint: 'A big animal in the forest!' },
    { word: 'DUCK',   emoji: '🦆', hint: 'It swims and says quack!' },
    { word: 'LION',   emoji: '🦁', hint: 'The king of the jungle!' },
    { word: 'RAIN',   emoji: '🌧️', hint: 'Water falling from clouds!' },
    { word: 'APPLE',  emoji: '🍎', hint: 'A red fruit you can eat!' },
    { word: 'HOUSE',  emoji: '🏠', hint: 'You live inside it!' },
    { word: 'HEART',  emoji: '❤️', hint: 'A shape that means love!' },
    { word: 'HORSE',  emoji: '🐴', hint: 'You can ride on it!' },
    { word: 'TRAIN',  emoji: '🚂', hint: 'It goes choo choo on tracks!' },
    { word: 'WATER',  emoji: '💧', hint: 'You drink it every day!' },
    { word: 'FLOWER', emoji: '🌸', hint: 'It is pretty and grows in gardens!' },
    { word: 'BANANA', emoji: '🍌', hint: 'A yellow fruit monkeys love!' },
    { word: 'RABBIT', emoji: '🐰', hint: 'It has long ears and hops!' },
    { word: 'ROCKET', emoji: '🚀', hint: 'It flies to space!' },
  ],
  speechLang: 'en-US',
  letterRegex: /[a-zA-Z]/,
  isLetter: (key) => /[a-zA-Z]/.test(key),
  normalizeKey: (key) => key.toUpperCase(),
  ui: {
    gefTitle: '🌟 Geffen\'s Game 🌟',
    gefSubtitle: 'Press a key — then lift your finger!',
    gurTitle: '📚 Gur\'s Game 📚',
    gurSubtitle: 'Type the word you see!',
    liftPrompt: '☝️ Lift your finger!<br>Then press again!',
    streak: 'Streak',
    best: 'Best',
    greatJob: 'Great job! 👏',
  },
  dir: 'ltr',
};

// ===== HEBREW =====
const langHE = {
  // Hebrew letter → emoji mapping (by the Hebrew letter itself)
  letterEmojis: {
    'א': ['🍎','🐜','✈️'],   // Alef — apple, ant, airplane
    'ב': ['🍌','🐻','🦋'],   // Bet — banana, bear, butterfly
    'ג': ['🦒','🍇','🎸'],   // Gimel — giraffe, grapes, guitar
    'ד': ['🐬','🐶','🦆'],   // Dalet — dolphin, dog, duck
    'ה': ['🏠','🐴','💖'],   // He — house, horse, heart
    'ו': ['🌹','🪱','🎻'],   // Vav — rose, worm, violin
    'ז': ['🦓','⚡','🪼'],   // Zayin — zebra, zap, jellyfish
    'ח': ['🐱','🌙','🧁'],   // Chet — cat, moon, cupcake
    'ט': ['🐯','🌮','🐢'],   // Tet — tiger, taco, turtle
    'י': ['🕊️','🍷','🧒'],   // Yod — dove, wine, child
    'כ': ['⭐','🐶','👑'],   // Kaf — star, dog, crown
    'ל': ['🦁','🍋','❤️'],   // Lamed — lion, lemon, heart
    'מ': ['💧','🐵','🍈'],   // Mem — water, monkey, melon
    'נ': ['🐍','🪺','📰'],   // Nun — snake, nest, newspaper
    'ס': ['🐴','📖','🌀'],   // Samekh — horse, book, swirl
    'ע': ['🌳','🍇','👁️'],   // Ayin — tree, grapes, eye
    'פ': ['🌸','🐘','🍕'],   // Pe — flower, elephant, pizza
    'צ': ['🐢','🎨','🐸'],   // Tsadi — turtle, art, frog
    'ק': ['🐵','🌈','🦘'],   // Qof — monkey, rainbow, kangaroo
    'ר': ['🤖','🐰','🌈'],   // Resh — robot, rabbit, rainbow
    'ש': ['☀️','🍓','🦊'],   // Shin — sun, strawberry, fox
    'ת': ['🐊','🍎','🎪'],   // Tav — crocodile, apple, circus
    // Final forms (sofit) — map to same as base
    'ך': ['⭐','🐶','👑'],
    'ם': ['💧','🐵','🍈'],
    'ן': ['🐍','🪺','📰'],
    'ף': ['🌸','🐘','🍕'],
    'ץ': ['🐢','🎨','🐸'],
  },
  emojiNames: {
    '🍎':'תפוח','🐜':'נמלה','✈️':'מטוס','🍌':'בננה','🐻':'דוב','🦋':'פרפר',
    '🦒':'ג׳ירפה','🍇':'ענבים','🎸':'גיטרה','🐬':'דולפין','🐶':'כלב','🦆':'ברווז',
    '🏠':'בית','🐴':'סוס','💖':'לב','🌹':'ורד','🪱':'תולעת','🎻':'כינור',
    '🦓':'זברה','⚡':'ברק','🪼':'מדוזה','🐱':'חתול','🌙':'ירח','🧁':'קאפקייק',
    '🐯':'נמר','🌮':'טאקו','🐢':'צב','🕊️':'יונה','🍷':'יין','🧒':'ילד',
    '⭐':'כוכב','👑':'כתר','🦁':'אריה','🍋':'לימון','❤️':'לב',
    '💧':'מים','🐵':'קוף','🍈':'מלון','🐍':'נחש','🪺':'קן','📰':'עיתון',
    '📖':'ספר','🌀':'סחרור','🌳':'עץ','👁️':'עין','🌸':'פרח','🐘':'פיל','🍕':'פיצה',
    '🎨':'אומנות','🐸':'צפרדע','🌈':'קשת','🦘':'קנגורו','🤖':'רובוט','🐰':'ארנב',
    '☀️':'שמש','🍓':'תות','🦊':'שועל','🐊':'תנין','🎪':'קרקס',
  },
  wordList: [
    { word: 'דג',     emoji: '🐟', hint: '!הוא שוחה במים' },
    { word: 'שמש',    emoji: '☀️', hint: '!היא זורחת בשמיים' },
    { word: 'כלב',    emoji: '🐶', hint: '!חבר נאמן שאומר הב הב' },
    { word: 'חתול',   emoji: '🐱', hint: '!חיית מחמד שאומרת מיאו' },
    { word: 'בית',    emoji: '🏠', hint: '!גרים בתוכו' },
    { word: 'ירח',    emoji: '🌙', hint: '!רואים אותו בלילה' },
    { word: 'פרח',    emoji: '🌸', hint: '!הוא יפה וגדל בגינה' },
    { word: 'עץ',     emoji: '🌳', hint: '!הוא גבוה וירוק' },
    { word: 'אריה',   emoji: '🦁', hint: '!מלך החיות' },
    { word: 'דוב',    emoji: '🐻', hint: '!חיה גדולה ביער' },
    { word: 'ברווז',  emoji: '🦆', hint: '!הוא שוחה ואומר קווק' },
    { word: 'צב',     emoji: '🐢', hint: '!הוא איטי עם שריון' },
    { word: 'סוס',    emoji: '🐴', hint: '!אפשר לרכב עליו' },
    { word: 'מים',    emoji: '💧', hint: '!שותים אותם כל יום' },
    { word: 'כוכב',   emoji: '⭐', hint: '!הוא נוצץ בלילה' },
    { word: 'גשם',    emoji: '🌧️', hint: '!מים שיורדים מהעננים' },
    { word: 'עוגה',   emoji: '🎂', hint: '!אוכלים אותה ביום הולדת' },
    { word: 'קוף',    emoji: '🐵', hint: '!הוא מטפס על עצים' },
    { word: 'נחש',    emoji: '🐍', hint: '!הוא זוחל על הארץ' },
    { word: 'פיל',    emoji: '🐘', hint: '!חיה ענקית עם חדק' },
    { word: 'ארנב',   emoji: '🐰', hint: '!יש לו אוזניים ארוכות' },
    { word: 'תות',    emoji: '🍓', hint: '!פרי אדום ומתוק' },
    { word: 'בננה',   emoji: '🍌', hint: '!פרי צהוב שקופים אוהבים' },
    { word: 'רכבת',   emoji: '🚂', hint: '!היא נוסעת על פסים' },
    { word: 'טיל',    emoji: '🚀', hint: '!הוא טס לחלל' },
  ],
  speechLang: 'he-IL',
  letterRegex: /[\u0590-\u05FF]/,
  isLetter: (key) => /[\u0590-\u05FF]/.test(key),
  normalizeKey: (key) => key, // Hebrew has no case
  ui: {
    gefTitle: '🌟 המשחק של גפן 🌟',
    gefSubtitle: '!לחצו על מקש — ואז הרימו את האצבע',
    gurTitle: '📚 המשחק של גור 📚',
    gurSubtitle: '!הקלידו את המילה שאתם רואים',
    liftPrompt: '!☝️ הרימו את האצבע<br>!ואז לחצו שוב',
    streak: 'רצף',
    best: 'שיא',
    greatJob: '!כל הכבוד 👏',
  },
  dir: 'rtl',
};

// ===== Background gradients =====
const bgColorsLight = [
  'linear-gradient(135deg, #f5f0e8 0%, #e8e0d4 100%)',
  'linear-gradient(135deg, #f0ebe3 0%, #e4ddd2 100%)',
  'linear-gradient(135deg, #eee8df 0%, #e0d8cc 100%)',
  'linear-gradient(135deg, #f2ece2 0%, #e6dfd4 100%)',
  'linear-gradient(135deg, #ede7dc 0%, #dfd8cd 100%)',
  'linear-gradient(135deg, #f4efe6 0%, #e8e2d8 100%)',
  'linear-gradient(135deg, #f0e9de 0%, #e2dbd0 100%)',
  'linear-gradient(135deg, #f3ede4 0%, #e5ded3 100%)',
];

const bgColorsDark = [
  'linear-gradient(135deg, #1c1b1a 0%, #2a2826 100%)',
  'linear-gradient(135deg, #1e1c1a 0%, #28261f 100%)',
  'linear-gradient(135deg, #1a1918 0%, #262420 100%)',
  'linear-gradient(135deg, #1d1b19 0%, #2a2722 100%)',
  'linear-gradient(135deg, #1b1a18 0%, #272520 100%)',
  'linear-gradient(135deg, #1c1a18 0%, #292622 100%)',
];

// ===== Sparkle colors =====
const sparkleColorsLight = [
  '#d4c8b8','#c8bca8','#beb2a0','#d0c4b4','#c4b8a8',
  '#dcd0c0','#c8bcac','#d8ccbc','#ccc0b0','#c0b4a4'
];
const sparkleColorsDark = [
  '#6b5e52','#5c5044','#7a6e60','#685c50','#5e5246',
  '#746858','#6a5e50','#7c7060','#645848','#706454'
];

// ===== Speech settings =====
const speechRate = 0.85;
const speechPitch = 1.1;

// ===== Timing (ms) =====
const holdPromptDelay = 800;
const celebrationDuration = 2500;

// ===== Helper to get active language config =====
function getLang() { return gameLang === 'he' ? langHE : langEN; }
