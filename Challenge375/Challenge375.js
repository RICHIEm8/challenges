const n = 998
const arr = 
  //converts const n to a string
  n.toString()
  //splits the string into seperate digits
  .split('')
  //calls provided function to each element inside array
  .map((number)
  //converts string to int and increments every digit by 1
  => parseInt(number, 10) + 1)
  //joins all the values back together to form one number
  .join('')

console.log(arr);

// const n = 998
// const arr = n.toString(10).split('').map((number) => parseInt(number, 10) + 1).join('')
// console.log(arr)