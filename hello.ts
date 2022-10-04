const mapped = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const uniqueMorseRepresentations = (words: string[]) =>
  new Set(
    words.map((word) =>
      word.split("").reduce((b, x) => (b += mapped[alphabet.indexOf(x)]), "")
    )
  ).size;

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
