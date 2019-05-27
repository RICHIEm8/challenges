function numberToHex(number) {  //function to convert an integar to a hex decimal
  let hex = number.toString(16); //(16) is called a radix, it is the base. hex is base 16 whereas day to day math is 10 and binary is 2. 
  if (hex.length < 2) { //conditional statement to check if the return value is less than two-digits and if so, always ensure a two-digit value
    hex = "0" + hex;
  }
  return hex; 
}

function hexColor(r,g,b) { //function to combine all hex decimals into a hex code
  const red = numberToHex(r)
  const green = numberToHex(g)
  const blue = numberToHex(b)

  return '#' + red+green+blue;
}
console.log(hexColor(184, 134, 11));