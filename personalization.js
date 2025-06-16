// --- Utility Functions ---
function getAccuracy(stats) {
  const acc = {};
  for (const key in stats) {
    const { correct, total } = stats[key];
    acc[key] = total > 0 ? correct / total : 1;
  }
  return acc;
}

function getWeakest(stats, count = 3, threshold = 0.9) {
  const acc = getAccuracy(stats);
  return Object.entries(acc)
    .filter(([_, v]) => v < threshold)
    .sort((a, b) => a[1] - b[1])
    .slice(0, count)
    .map(entry => entry[0]);
}

// --- Storage Helpers ---
function loadStats(key) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : {};
}

// --- Drill Word Selection ---
let WORDS = [];

function loadWords(callback) {
  fetch('words.csv')
    .then(response => response.text())
    .then(text => {
      // Split CSV by comma, trim whitespace
      WORDS = text.split(',').map(w => w.trim()).filter(Boolean);
      if (callback) callback();
    });
}

function selectWordsWithLetters(letters, count = 5) {
  return WORDS.filter(word =>
    letters.some(l => word.includes(l))
  ).slice(0, count);
}

function selectWordsWithSequences(sequences, count = 5) {
  return WORDS.filter(word =>
    sequences.some(seq => word.includes(seq))
  ).slice(0, count);
}

// --- Personalization API ---
function personalizeDrills() {
  const letterStats = loadStats('letterStats');
  const sequenceStats = loadStats('sequenceStats');
  const weakLetters = getWeakest(letterStats, 3, 0.9);
  const weakSequences = getWeakest(sequenceStats, 3, 0.9);
  const letterDrillWords = selectWordsWithLetters(weakLetters, 5);
  const sequenceDrillWords = selectWordsWithSequences(weakSequences, 5);
  const mixed = [
    ...letterDrillWords.slice(0, 3),
    ...sequenceDrillWords.slice(0, 2),
    ...WORDS.filter(w => !letterDrillWords.includes(w) && !sequenceDrillWords.includes(w)).slice(0, 20)
  ];
  return {
    weakLetters,
    weakSequences,
    letterDrillWords,
    sequenceDrillWords,
    mixedDrillWords: mixed
  };
}