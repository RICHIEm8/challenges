const words = [
  'fiery',
  'hierarchy',
  'hieroglyphic',
  'ceiling',
  'inconceivable',
  'receipt',
  'daily',
  'programmer', 
  'one',
  'two', 
  'three',
  'sleigh', 
  'stein',
  'fahrenheit',
  'deifies',
  'either',
  'nuclei',
  'reimburse',
  'ancient',
  'juicier',
  'societies'
];

function checkForRule(word) {
  // const containsEI = /ei/.test(word);
  // const containsIE = /ie/.test(word);
  const containsEI = word.includes('ei');
  const containsIE = word.includes('ie');
  const containsCEI = word.includes('cei');
  const containsCIE = word.includes('cie');

  if (!containsEI && !containsIE) {
    return word + ' ' + true;
  } else if (containsEI && containsCEI) {
    return word + ' ' + true;
  } else if (containsIE && !containsEI && !containsCIE) {
    return word + ' ' + true;
  } else {
    return word + ' ' + false;
  }
};

console.log(words.map(checkForRule));