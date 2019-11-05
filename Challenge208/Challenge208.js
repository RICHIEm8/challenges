const rawInput = "3 1 3 4 4 1 4 5 2 1 4 4 4 4 1 4 3 2 5 5 2 2 2 4 2 4 4 4 4 1"; //initial string inside variable rawInput
const input = rawInput.split(' '); //creating an array where each element is to the left and right of the seperator (' ')

function cull(arr){
  return arr.filter(function(integer, index) { //integer is the name of the VALUE argument. index is the name of the INDEX argument. 
    return arr.indexOf(integer) === index; //creating an array of the first encounterment of each element inside the original array. checking that the index of 'integer' equals to the 'index' of the value
  })
};

console.log(cull(input));


// using Set for less code
// const rawInput = '3 1 3 4 4 1 4 5 2 1 4 4 4 4 1 4 3 2 5 5 2 2 2 4 2 4 4 4 4 1';
// const input = Array.from(new Set(rawInput.split(' ')));

// console.log(input.sort());
