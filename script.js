const CHO = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const JUNG = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
const JONG = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

const WORDS = [
  { text: "불", meaning: "fire", jamo: ["ㅂ", "ㅜ", "ㄹ"] },
  { text: "물", meaning: "water", jamo: ["ㅁ", "ㅜ", "ㄹ"] },
  { text: "비", meaning: "rain", jamo: ["ㅂ", "ㅣ"] },
  { text: "집", meaning: "house", jamo: ["ㅈ", "ㅣ", "ㅂ"] },
  { text: "책", meaning: "book", jamo: ["ㅊ", "ㅐ", "ㄱ"] },
  { text: "꽃", meaning: "flower", jamo: ["ㄲ", "ㅗ", "ㅊ"] },
  { text: "봄", meaning: "spring", jamo: ["ㅂ", "ㅗ", "ㅁ"] },
  { text: "산", meaning: "mountain", jamo: ["ㅅ", "ㅏ", "ㄴ"] },
  { text: "강", meaning: "river", jamo: ["ㄱ", "ㅏ", "ㅇ"] },
  { text: "달", meaning: "moon", jamo: ["ㄷ", "ㅏ", "ㄹ"] },
  { text: "꿈", meaning: "dream", jamo: ["ㄲ", "ㅜ", "ㅁ"] },
  { text: "나무", meaning: "tree", jamo: ["ㄴ", "ㅏ", "ㅁ", "ㅜ"] },
  { text: "하늘", meaning: "sky", jamo: ["ㅎ", "ㅏ", "ㄴ", "ㅡ", "ㄹ"] },
  { text: "하루", meaning: "one day", jamo: ["ㅎ", "ㅏ", "ㄹ", "ㅜ"] },
  { text: "하마", meaning: "hippopotamus", jamo: ["ㅎ", "ㅏ", "ㅁ", "ㅏ"] },
  { text: "바다", meaning: "sea", jamo: ["ㅂ", "ㅏ", "ㄷ", "ㅏ"] },
  { text: "학교", meaning: "school", jamo: ["ㅎ", "ㅏ", "ㄱ", "ㄱ", "ㅛ"] },
  { text: "학생", meaning: "student", jamo: ["ㅎ", "ㅏ", "ㄱ", "ㅅ", "ㅐ", "ㅇ"] },
  { text: "친구", meaning: "friend", jamo: ["ㅊ", "ㅣ", "ㄴ", "ㄱ", "ㅜ"] },
  { text: "사랑", meaning: "love", jamo: ["ㅅ", "ㅏ", "ㄹ", "ㅏ", "ㅇ"] },
  { text: "사람", meaning: "person", jamo: ["ㅅ", "ㅏ", "ㄹ", "ㅏ", "ㅁ"] },
  { text: "언어", meaning: "language", jamo: ["ㅇ", "ㅓ", "ㄴ", "ㅇ", "ㅓ"] },
  { text: "공부", meaning: "study", jamo: ["ㄱ", "ㅗ", "ㅇ", "ㅂ", "ㅜ"] },
  { text: "한국", meaning: "Korea", jamo: ["ㅎ", "ㅏ", "ㄴ", "ㄱ", "ㅜ", "ㄱ"] },
  { text: "시간", meaning: "time", jamo: ["ㅅ", "ㅣ", "ㄱ", "ㅏ", "ㄴ"] },
  { text: "게임", meaning: "game", jamo: ["ㄱ", "ㅔ", "ㅇ", "ㅣ", "ㅁ"] },
];

const ROUND_BOARDS = {
  1: ["ㅎ", "ㅏ", "ㄴ", "ㅡ", "ㄹ", "ㅂ", "ㅜ", "ㄹ", "ㄴ", "ㅏ", "ㅁ", "ㅜ", "ㅂ", "ㅏ", "ㄷ", "ㅏ"],
  2: ["ㅎ", "ㅏ", "ㄱ", "ㄱ", "ㅛ", "ㅅ", "ㅐ", "ㅇ", "ㅊ", "ㅣ", "ㄴ", "ㄱ", "ㅜ", "ㅅ", "ㅏ", "ㄹ"],
  3: ["ㅇ", "ㅓ", "ㄴ", "ㅇ", "ㅓ", "ㄱ", "ㅗ", "ㅇ", "ㅂ", "ㅜ", "ㅎ", "ㅏ", "ㄴ", "ㄱ", "ㅜ", "ㄱ"],
};

const FILLER = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㅏ", "ㅏ", "ㅓ", "ㅓ", "ㅗ", "ㅗ", "ㅜ", "ㅜ", "ㅡ", "ㅡ", "ㅣ", "ㅣ", "ㅐ", "ㅔ"];
const VOWEL_RICH_EXTRA = ["ㅏ", "ㅏ", "ㅓ", "ㅓ", "ㅗ", "ㅜ", "ㅡ", "ㅣ", "ㅐ", "ㅔ", "ㅏ", "ㅗ"];

const BOOSTERS = {
  shortBurst: { name: "Short Burst", icon: "↯", description: "One-syllable words gain +5 points.", detail: "+5 on compact words" },
  freshDecode: { name: "Fresh Decode", icon: "✦", description: "The first use of each unique word gains +3 points.", detail: "+3 on new words" },
};

const state = {
  target: 72,
  round: 1,
  roundPlays: 0,
  totalPlays: 0,
  score: 0,
  board: [],
  bag: [],
  selectedIds: [],
  protocols: [],
  usedWords: new Set(),
  history: [],
  finished: false,
  preset: "balanced",
  nextTileId: 0,
  feedbackTimer: null,
};

const $ = (selector) => document.querySelector(selector);
const boardEl = $("#board");

function tileValue(jamo) {
  if (["ㅐ", "ㅔ", "ㅓ", "ㅑ", "ㅕ", "ㅛ", "ㅠ", "ㅡ", "ㅣ"].includes(jamo)) return 2;
  if (["ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ", "ㅎ"].includes(jamo)) return 2;
  return 1;
}

function createTiles(jamos) {
  return jamos.map((jamo) => ({ id: `tile-${state.nextTileId++}`, jamo, value: tileValue(jamo) }));
}

function presetData(preset) {
  if (preset === "vowel-rich") {
    return {
      label: "VOWEL-RICH",
      description: "Extra vowels make longer compositions easier to discover.",
      bag: [...ROUND_BOARDS[2], ...ROUND_BOARDS[3], ...FILLER, ...VOWEL_RICH_EXTRA],
    };
  }
  return {
    label: "BALANCED",
    description: "A visible practice bag keeps the next draws teachable.",
    bag: [...ROUND_BOARDS[2], ...ROUND_BOARDS[3], ...FILLER],
  };
}

function resetRun() {
  state.round = 1;
  state.roundPlays = 0;
  state.totalPlays = 0;
  state.score = 0;
  state.selectedIds = [];
  state.protocols = [];
  state.usedWords = new Set();
  state.history = [];
  state.finished = false;
  state.nextTileId = 0;
  const data = presetData(state.preset);
  state.board = createTiles(ROUND_BOARDS[1]);
  state.bag = createTiles(data.bag);
  hideModal("#run-modal");
  hideModal("#booster-modal");
  setFeedback("A fresh signal field is online. Build a word from the highlighted layer.");
  render();
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = (i * 7 + 3) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function selectTile(tileId) {
  if (state.finished) return;
  const selectedIndex = state.selectedIds.indexOf(tileId);
  if (selectedIndex >= 0) {
    state.selectedIds.splice(selectedIndex, 1);
  } else {
    state.selectedIds.push(tileId);
  }
  render();
}

function clearSelection() {
  state.selectedIds = [];
  render();
}

function selectedTiles() {
  return state.selectedIds.map((id) => state.board.find((tile) => tile.id === id)).filter(Boolean);
}

function composeHangul(jamos) {
  let display = "";
  let syllables = 0;
  let index = 0;
  while (index < jamos.length) {
    const onset = jamos[index];
    const vowel = jamos[index + 1];
    const onsetIndex = CHO.indexOf(onset);
    const vowelIndex = JUNG.indexOf(vowel);
    if (onsetIndex >= 0 && vowelIndex >= 0) {
      let final = "";
      let consumed = 2;
      const possibleFinal = jamos[index + 2];
      const following = jamos[index + 3];
      if (possibleFinal && JONG.includes(possibleFinal) && !JUNG.includes(following)) {
        final = possibleFinal;
        consumed = 3;
      }
      const finalIndex = JONG.indexOf(final);
      display += String.fromCharCode(0xac00 + ((onsetIndex * 21 + vowelIndex) * 28) + finalIndex);
      syllables += 1;
      index += consumed;
    } else {
      display += onset || "";
      index += 1;
    }
  }
  return { display, syllables };
}

function currentAnalysis() {
  const tiles = selectedTiles();
  const composition = composeHangul(tiles.map((tile) => tile.jamo));
  const word = WORDS.find((entry) => entry.text === composition.display);
  const isDuplicate = Boolean(word && state.usedWords.has(word.text));
  const valid = Boolean(word && !isDuplicate);
  const base = tiles.reduce((total, tile) => total + tile.value, 0);
  const lengthBonus = composition.syllables > 0 ? [0, 0, 3, 7, 12][Math.min(composition.syllables, 4)] || 0 : 0;
  let protocolBonus = 0;
  const protocolDetails = [];
  if (valid && state.protocols.includes("shortBurst") && composition.syllables === 1) {
    protocolBonus += 5;
    protocolDetails.push("Burst +5");
  }
  if (valid && state.protocols.includes("freshDecode") && !state.usedWords.has(word.text)) {
    protocolBonus += 3;
    protocolDetails.push("Fresh +3");
  }
  return {
    tiles,
    text: composition.display,
    syllables: composition.syllables,
    word,
    valid,
    isDuplicate,
    base,
    lengthBonus,
    protocolBonus,
    protocolDetails,
    total: base + lengthBonus + protocolBonus,
  };
}

function canForm(word) {
  const available = {};
  state.board.forEach((tile) => { available[tile.jamo] = (available[tile.jamo] || 0) + 1; });
  return word.jamo.every((jamo) => {
    if (!available[jamo]) return false;
    available[jamo] -= 1;
    return true;
  });
}

function availableWords() {
  return WORDS.filter((word) => !state.usedWords.has(word.text) && canForm(word)).sort((a, b) => b.jamo.length - a.jamo.length || a.text.localeCompare(b.text));
}

function autoSelectWord(word) {
  state.selectedIds = [];
  const remaining = [...state.board];
  word.jamo.forEach((jamo) => {
    const tileIndex = remaining.findIndex((tile) => tile.jamo === jamo);
    if (tileIndex >= 0) state.selectedIds.push(remaining.splice(tileIndex, 1)[0].id);
  });
  render();
}

function scoreBreakdown(analysis) {
  if (!analysis.tiles.length) return "Select a recognized word to preview its score.";
  if (!analysis.valid) return analysis.isDuplicate ? "Already transmitted this word — choose a new signal." : "Signal unrecognized — keep building or choose a suggestion.";
  const parts = [`Tiles ${analysis.base}`, `Length +${analysis.lengthBonus}`];
  if (analysis.protocolDetails.length) parts.push(analysis.protocolDetails.join(" · "));
  return `${parts.join("  ·  ")}  =  <strong class="accent">${analysis.total} pts</strong>`;
}

function submitWord() {
  const analysis = currentAnalysis();
  if (!analysis.valid || state.finished) return;
  state.score += analysis.total;
  state.totalPlays += 1;
  state.roundPlays += 1;
  state.usedWords.add(analysis.word.text);
  state.history.unshift({ round: state.round, word: analysis.word.text, score: analysis.total, meaning: analysis.word.meaning });
  const usedIds = new Set(state.selectedIds);
  state.board = state.board.filter((tile) => !usedIds.has(tile.id));
  state.selectedIds = [];
  const refillCount = Math.min(analysis.tiles.length, state.bag.length);
  state.board.push(...state.bag.splice(0, refillCount));
  if (state.score >= state.target) setFeedback(`Target breached at ${state.score} points. Keep transmitting to complete the run.`, "success");
  else setFeedback(`${analysis.word.text} — ${analysis.word.meaning} — +${analysis.total} points.`, "success");
  render();
  if (state.roundPlays >= 3) {
    if (state.round < 3) {
      window.setTimeout(() => showBoosterModal(), 240);
    } else {
      window.setTimeout(() => finishRun(), 360);
    }
  }
}

function chooseBooster(key) {
  if (!state.protocols.includes(key)) state.protocols.push(key);
  hideModal("#booster-modal");
  const booster = BOOSTERS[key];
  state.round += 1;
  state.roundPlays = 0;
  setFeedback(`${booster.name} online — Round ${state.round} is live.`, "success");
  render();
}

function showBoosterModal() {
  if (state.finished) return;
  const options = ["shortBurst", "freshDecode"].filter((key) => !state.protocols.includes(key));
  $("#booster-options").innerHTML = options.map((key) => {
    const booster = BOOSTERS[key];
    return `<button class="booster-option" type="button" data-booster="${key}"><span class="booster-icon">${booster.icon}</span><strong>${booster.name}</strong><span>${booster.description}</span></button>`;
  }).join("");
  $("#booster-options").querySelectorAll("[data-booster]").forEach((button) => button.addEventListener("click", () => chooseBooster(button.dataset.booster)));
  showModal("#booster-modal");
}

function finishRun() {
  state.finished = true;
  const won = state.score >= state.target;
  $("#result-eyebrow").textContent = won ? "TRANSMISSION COMPLETE" : "SIGNAL LOST";
  $("#result-seal").textContent = won ? "◈" : "△";
  $("#run-modal-title").textContent = won ? "Signal breached" : "Run needs a retry";
  $("#result-copy").textContent = won
    ? `You cleared the ${state.target}-point gate in 9 plays. Your strongest transmission was ${state.history[0]?.word || "—"}.`
    : `The gate is still ${state.target - state.score} points away. Your best available line is a retry with a sharper booster choice.`;
  $("#result-score-value").textContent = state.score;
  setFeedback(won ? "Run complete — the signal gate is open." : `Run complete — ${state.target - state.score} points short.`, won ? "success" : "warn");
  render();
  showModal("#run-modal");
}

function showModal(selector) { $(selector).classList.remove("hidden"); }
function hideModal(selector) { $(selector).classList.add("hidden"); }

function setFeedback(message, type = "") {
  const feedback = $("#feedback");
  feedback.textContent = message;
  feedback.className = `feedback${type ? ` is-${type}` : ""}`;
  window.clearTimeout(state.feedbackTimer);
  state.feedbackTimer = window.setTimeout(() => {
    if (!state.finished) feedback.textContent = "";
  }, 4200);
}

function renderBoard() {
  const selectedOrder = new Map(state.selectedIds.map((id, index) => [id, index + 1]));
  boardEl.innerHTML = state.board.map((tile) => {
    const selected = selectedOrder.has(tile.id);
    return `<button class="jamo-tile${selected ? " is-selected" : ""}" type="button" data-tile-id="${tile.id}" data-order="${selected ? selectedOrder.get(tile.id) : ""}" data-value="${tile.value}" aria-label="Jamo ${tile.jamo}, worth ${tile.value} point${tile.value === 1 ? "" : "s"}" ${state.finished ? "disabled" : ""}>${tile.jamo}</button>`;
  }).join("");
  boardEl.querySelectorAll("[data-tile-id]").forEach((button) => button.addEventListener("click", () => selectTile(button.dataset.tileId)));
}

function renderAssembly() {
  const analysis = currentAnalysis();
  const wordEl = $("#assembly-word");
  wordEl.className = `assembly-word${analysis.valid ? " is-valid" : analysis.tiles.length ? " is-invalid" : ""}`;
  wordEl.innerHTML = analysis.text ? analysis.text : `<span class="assembly-placeholder">Select jamo from the board</span>`;
  const validity = $("#validity-state");
  if (analysis.valid) {
    validity.className = "validity-state is-valid";
    validity.innerHTML = `<span class="validity-icon">◆</span> Valid signal`;
  } else if (analysis.tiles.length) {
    validity.className = "validity-state is-invalid";
    validity.innerHTML = `<span class="validity-icon">△</span> ${analysis.isDuplicate ? "Already used" : "Unrecognized"}`;
  } else {
    validity.className = "validity-state is-idle";
    validity.innerHTML = `<span class="validity-icon">○</span> Awaiting input`;
  }
  $("#score-breakdown").innerHTML = scoreBreakdown(analysis);
  $("#submit-btn").disabled = !analysis.valid || state.finished;
  $("#submit-word").textContent = analysis.valid ? analysis.text : "";
  const suggestions = availableWords().slice(0, 3);
  $("#available-count").textContent = availableWords().length;
  $("#suggestion-list").innerHTML = suggestions.map((word) => `<button type="button" class="suggestion-button" data-word="${word.text}" title="${word.meaning}">${word.text}</button>`).join("");
  $("#suggestion-list").querySelectorAll("[data-word]").forEach((button) => {
    const word = WORDS.find((entry) => entry.text === button.dataset.word);
    button.addEventListener("click", () => autoSelectWord(word));
  });
}

function renderProtocols() {
  const list = $("#protocol-list");
  if (!state.protocols.length) list.innerHTML = `<div class="empty-protocol">Choose a booster after Round 1.</div>`;
  else list.innerHTML = state.protocols.map((key) => `<div class="protocol-chip"><strong>${BOOSTERS[key].name}</strong><span>${BOOSTERS[key].detail}</span></div>`).join("");
  $("#protocol-count").textContent = `${state.protocols.length} ONLINE`;
}

function renderTelemetry() {
  $("#round-plays-value").textContent = `${state.roundPlays} / 3`;
  $("#words-value").textContent = state.history.length;
  $("#best-word-value").textContent = state.history.length ? state.history.reduce((best, entry) => entry.score > best.score ? entry : best).word : "—";
  $("#bag-units-value").textContent = state.bag.length;
  $("#history").innerHTML = state.history.length
    ? state.history.slice(0, 4).map((entry) => `<div class="history-row"><span>R${entry.round}</span><strong>${entry.word}</strong><em>+${entry.score}</em></div>`).join("")
    : `<div class="history-empty">Your transmissions will appear here.</div>`;
}

function renderBag() {
  const data = presetData(state.preset);
  $("#bag-preset-label").textContent = data.label;
  $("#bag-description").textContent = data.description;
  $("#bag-total").textContent = state.bag.length;
  const counts = { consonants: 0, vowels: 0, other: 0 };
  const exact = {};
  state.bag.forEach((tile) => {
    const category = CHO.includes(tile.jamo) ? "consonants" : JUNG.includes(tile.jamo) ? "vowels" : "other";
    counts[category] += 1;
    exact[tile.jamo] = (exact[tile.jamo] || 0) + 1;
  });
  const max = Math.max(1, ...Object.values(counts));
  const labels = [["CONSONANTS", "consonants"], ["VOWELS", "vowels"], ["SPECIAL", "other"]];
  $("#bag-bars").innerHTML = labels.map(([label, key]) => `<div class="bag-bar-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round((counts[key] / max) * 100)}%"></div></div><strong>${counts[key]}</strong></div>`).join("");
  $("#bag-exact").innerHTML = Object.entries(exact).map(([jamo, count]) => `<div class="bag-chip"><span>${jamo}</span><small>×${count}</small></div>`).join("");
}

function renderWordLog() {
  const words = state.history.length ? state.history : WORDS.slice(0, 5).map((word) => ({ word: word.text, meaning: word.meaning }));
  $("#word-log").innerHTML = words.slice(0, 6).map((entry) => `<div class="word-log-entry${entry.score ? " is-new" : ""}"><strong>${entry.word}</strong><span>${entry.score ? `+${entry.score} · ` : ""}${entry.meaning}</span></div>`).join("");
}

function render() {
  $("#round-label").textContent = `ROUND ${state.round}`;
  $("#score-value").textContent = state.score;
  $("#target-value").textContent = state.target;
  $("#plays-value").textContent = 9 - state.totalPlays;
  $("#target-progress").style.width = `${Math.min(100, (state.score / state.target) * 100)}%`;
  [1, 2, 3].forEach((round) => {
    const step = $(`#step-${round}`);
    step.className = `round-step${round === state.round && !state.finished ? " is-current" : round < state.round || state.finished ? " is-done" : ""}`;
  });
  $("#run-state").className = `status-pill${state.finished ? " is-warning" : ""}`;
  $("#run-state").innerHTML = `<span class="status-dot"></span> ${state.finished ? "RUN ARCHIVED" : state.score >= state.target ? "TARGET BREACHED" : "SIGNAL STABLE"}`;
  renderProtocols();
  renderAssembly();
  renderBoard();
  renderTelemetry();
  renderBag();
  renderWordLog();
}

$("#clear-btn").addEventListener("click", clearSelection);
$("#submit-btn").addEventListener("click", submitWord);
$("#restart-btn").addEventListener("click", resetRun);
$("#result-restart-btn").addEventListener("click", resetRun);
$("#bag-preset").addEventListener("change", (event) => {
  state.preset = event.target.value;
  resetRun();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") clearSelection();
  if (event.key === "Enter" && !$("#submit-btn").disabled) submitWord();
});

resetRun();
