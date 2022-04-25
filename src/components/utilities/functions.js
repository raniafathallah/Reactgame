export function shuffleWord(word) {
  if (word.length < 2) return word;
  const first = word.slice(0, 1);
  const middle = word.slice(1, -1);
  const last = word.slice(-1);
  const shuffled = middle
    .split("")
    .sort(() => 0.2 - Math.random())
    .join("");
  return first + shuffled + last;
}
