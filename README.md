# Geffen & Gur's Game 🎮

A fun, colorful learning game for kids with two modes:

- **Geffen Mode** 🌟 — Press any key to discover emojis and letters. Teaches keyboard awareness and letter recognition.
- **Gur Mode** 📚 — Type the word shown on screen. Tracks your streak of consecutive correct words. Words are read aloud on completion.

## Hidden Game: Fishing Pond 🎣

Triple-click any game title to unlock the secret Fishing Pond game — a patience trainer. Watch the bobber, wait for the bite, press SPACE at the right moment. Press too early and the fish gets scared. Wait too long and it escapes. Build a collection of sea creatures!

## Play

Open `index.html` in any modern browser — no build step or server needed.

## Project Structure

```
geffen-game/
├── index.html          # Main HTML shell
├── css/
│   ├── styles.css      # All styles and themes
│   └── fishing.css     # Fishing game styles
├── js/
│   ├── config.js       # Editable settings (colors, words, emojis, sounds)
│   ├── audio.js        # Sound effects and text-to-speech
│   ├── effects.js      # Visual effects (sparkles, floating emojis)
│   ├── geffen.js       # Geffen mode logic
│   ├── gur.js          # Gur mode logic + streak scoring
│   ├── fishing.js      # Fishing Pond game logic
│   └── main.js         # App initialization and keyboard handling
└── README.md
```

## Customization

All tunable settings live in `js/config.js`:

- **`letterEmojis`** — Map of letter → emoji arrays for Geffen mode
- **`nonLetterEmojis`** — Emojis shown for non-letter keys
- **`emojiNames`** — Display names for each emoji
- **`wordList`** — Words for Gur mode (word, emoji, hint)
- **`bgColorsLight` / `bgColorsDark`** — Background gradients
- **`sparkleColorsLight` / `sparkleColorsDark`** — Sparkle particle colors
- **`speechRate` / `speechPitch`** — Voice speed and pitch for word reading
- **`holdPromptDelay`** — How long before the "lift finger" prompt appears (ms)
- **`celebrationDuration`** — How long the win celebration shows (ms)

## License

MIT
