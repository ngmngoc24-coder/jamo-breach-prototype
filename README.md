# jamo-breach-prototyp
Korean word-building score-attack roguelite: Build real Korean words, bend the odds, and create a scoring engine powerful enough to breach each level's target.

# J△Mㅇ//BRㅌACH — first playable slice

This is a no-build, local prototype of the first Korean word round for **J△Mㅇ//BRㅌACH**. It implements one full baseline run:

- 3 rounds × 3 plays = 9 total scoring actions
- a cumulative target visible throughout the run
- a 4×4 jamo board with tap-to-select tiles
- automatic Hangul syllable composition (`ㅎ → ㅏ → ㄴ` becomes `한`; adding `ㅡ → ㄹ` becomes `하늘`)
- a small curated Korean word list with meanings revealed after successful transmission
- score preview: tile values + syllable-length bonus + active protocol bonus
- booster choices after Rounds 1 and 2
- a visible Signal Bag with category counts, exact remaining jamo, and two presets
- duplicate-word protection for a single level
- a clear success/failure result and one-tap retry

## Run it

Open `index.html` in a browser. No package install, server, API key, or network connection is required.

For a local server instead:

```bash
cd output/jamo-breach-prototype
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/`.

## How to play

1. Tap jamo in pronunciation order, or tap an available-word suggestion.
2. Watch the live Hangul composition and score preview.
3. Press **Transmit word** for a valid word. Invalid or repeated words do not consume a Play.
4. After Plays 3 and 6, choose one of the two available protocols.
5. After Play 9, the run reports whether the cumulative target was breached.

`Balanced` keeps the practice bag varied. `Vowel-rich` adds more vowels so longer compositions are easier to discover. Changing the preset starts a fresh run.

## Deliberate first-slice simplifications

The source design document is the authority, but the visible MVP rules leave a few tuning decisions open. This prototype marks those decisions here rather than presenting them as finalized rules:

- **Target:** the document uses 180 as an example but does not lock a baseline target; this slice uses **72** so the bundled dictionary can produce a complete, winnable demo in nine plays.
- **Booster draft:** the requested first slice uses two simple choices — **Short Burst** (+5 for one-syllable words) and **Fresh Decode** (+3 for a new word) — instead of the later three-card draft.
- **Bag draws:** the bag is deterministic and teachable rather than shuffled from a frequency-calibrated distribution; the preset changes the remaining draw queue.
- **Board continuity:** submitted tiles refill from the bag; the board is not re-rolled between rounds. The small prototype bag is intentionally larger than the visible 16 tiles.
- **Jamo coverage:** compound vowels/finals, Wild, Gold, Corrupted, hacks, refresh charges, probability math, and the larger booster roster are not included in this first slice.
- **Dictionary:** the allowlist is a bundled prototype list, not a live Urimalsaem integration or a claim of complete dictionary coverage.

The project does not modify the Drive design document and does not deploy publicly.
