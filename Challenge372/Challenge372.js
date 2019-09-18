//  INDIVIDUAL INPUTS
// function checkForBalance(input) {
//   if (input.match(/x/g).length === input.match(/y/g).length) {
//     return input + ' is ' + true;
//   } else {
//     return input + ' is ' + false;
//   }
// }
// console.log(checkForBalance('xxxyyy'));

//  ARRAY OF INPUTS
// const inputs = [
//   "xxxyyy",
//   "yyyxxx",
//   "xxxyyyy",
//   "yyxyxxyxxyyyyxxxyxyx",
//   "xyxxxxyyyxyxxyxxyy",
//   "",
//   "x"
// ];
// const output = inputs.map((input) => {
//   if (!input.match(/x/g) || !input.match(/y/g)) {
//     return input + ' is ' + false;
//   } else if (input.match(/x/g).length === input.match(/y/g).length) {
//     return input + ' is ' + true;
//   } else {
//     return input + ' is ' + false;
//   }
// });
// console.log(output);

//  ARRAY OF INPUTS AND CLEANER CODE
// const inputs = [
//   "xxxyyy",
//   "yyyxxx",
//   "xxxyyyy",
//   "yyxyxxyxxyyyyxxxyxyx",
//   "xyxxxxyyyxyxxyxxyy",
//   "",
//   "x"
// ];
// const output = inputs.map((input) => {
//   const inputX = input.match(/x/g);
//   const inputY = input.match(/y/g);
//   const isNull = !inputX || !inputY;
//   const isBalanced = !isNull && inputX.length === inputY.length;

//   if (isBalanced) {
//     return input + ' is ' + true;
//   } else {
//     return input + ' is ' + false;
//   }
// });
// console.log(output);

//  EVEN CLEANER AND SUCCINCTLY CODE
const inputs = [
  "xxxyyy",
  "yyyxxx",
  "xxxyyyy",
  "yyxyxxyxxyyyyxxxyxyx",
  "xyxxxxyyyxyxxyxxyy",
  "",
  "x"
];

function handleInput(input) {
  const x = input.match(/x/g);
  const y = input.match(/y/g);

  return x && y ? x.length === y.length : false
}

function handleOutput(input, result) {
  return `${input} is ${result}`
}

function balanced(input) {
  const result = handleInput(input)
  return handleOutput(input, result)
}

console.log(inputs.map(balanced));