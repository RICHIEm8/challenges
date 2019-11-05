const str = "two drums and a cymbal fall off a cliff";
const newStr = str.split(/[aeiou ]/g).join("");
const vowels = str.split(/[^aeiou]/g).join("");

console.log(newStr);
console.log(vowels);
