//using a for loop
const jewels = ['a','A']
const stones = ['a','A','A','b','b','b','b']
let output = []

for (let j = 0; j < jewels.length; j++) {
  for (let s = 0; s < stones.length; s++) {
    if (jewels[j] === stones[s]) {
      output.push(jewels[j]);
    }
  }
}

console.log(output.length);

//another way of doing it using .filter and .includes
const jewels = ['a','A']
const stones = ['a','A','A','b','b','b','b']
let output = stones.filter(value => jewels.includes(value))
console.log(output.length);