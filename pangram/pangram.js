export const isPangram = (str) => {
  const map = {};
  for (const char of str) {
    map[char.toLowerCase()] = true;
  }
  for (let i = "a".charCodeAt(0); i < "z".charCodeAt(0); i++) {
    let char = String.fromCharCode(i);
    if (!map[char]) {
      return false;
    }
  } return true;
};