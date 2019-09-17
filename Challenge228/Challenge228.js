//  INDIVIDUAL INPUTS
// function wordCheck(word) {
//   if (word === word.split('').sort().join('')) {
//     return word + ' IN ORDER';
//   } else if (word === word.split('').sort().reverse().join('')){
//     return word + ' REVERSE ORDER';
//   } else {
//     return word + ' NOT IN ORDER';
//   }
// };
// console.log(wordCheck('sponged'));


//  ARRAY OF INPUTS
// const words = [
//   'billowy',
//   'biopsy',
//   'chinos',
//   'defaced',
//   'chintz',
//   'sponged',
//   'bijoux',
//   'abhors',
//   'fiddle',
//   'begins',
//   'chimps',
//   'wronged'
// ];
// const output = words.map((word) => {
//   if (word === word.split('').sort().join('')) {
//     return word + ' IN ORDER';
//   } else if (word === word.split('').sort().reverse().join('')){
//     return word + ' REVERSE ORDER';
//   } else {
//     return word + ' NOT IN ORDER';
//   }
// });
// console.log(output);


// ARRAY OF INPUTS AND CLEANER CODE
const words = [
  'billowy',
  'biopsy',
  'chinos',
  'defaced',
  'chintz',
  'sponged',
  'bijoux',
  'abhors',
  'fiddle',
  'begins',
  'chimps',
  'wronged'
];
const output = words.map((word) => {
  const sort = word
    .split('')
    .sort()
    .join('');
  const reverseSort = word
    .split('')
    .sort()
    .reverse()
    .join('');

  if (word === sort) {
    return word + ' IN ORDER';
  } else if (word === reverseSort) {
    return word + ' REVERSE ORDER';
  } else {
    return word + ' NOT IN ORDER';
  }
});
console.log(output);