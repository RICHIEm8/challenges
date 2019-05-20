const name = process.argv[2] //declaring a variable, process.argv allows me to insert an input(a name) when I run the script instead of hard declaring a name

if (name[0] === name[0].toUpperCase()){ //checks if the first letter of the name is an upper case
    console.log(name.toLowerCase()); //prints the name in lower case if the first letter is an upper case
}
else {
    console.log(name.toUpperCase()); //prints the name in upper case if the first letter is a lower case
}

//the code stops working if I input more than one name, it ignores anything after the first word