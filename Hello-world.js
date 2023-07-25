console.log("Hello-world")

//1.comments
// used to provide information about the code
// can be used to provide any infformation or suggestions
// makes it easy to understand the code or get more information about the code
// can also be used to comment out code sections
// comments are ignored by javascript engine
// comments can be ingle line or multiline
// examples
// this is a single line comment
/*
this is multi line comment
*/

//2. variables
// used to store data
// can be looked as containers for storing data values
// must contain only letters, digit or $ and _symbol

// guidelines for naming variables must begin witha letter or _
// shuold nt start with a number
// mut not be a reserved key word like if, else, boolean, let, var etc
// vaariable are case sensitive
// use meaningful names
// use camelcasing 
// var was used in earlier versions but now we use let and const

// examples
// variable declaration
let age;


// variable initialisation
age = 23
// =this is called an assignment opperator
let studentName = "Mellon"
console.log(studentName)
// declaring many variable on the same line
let firstName, lastName, cohort, year;
firstName = "Mary";
lastName = "Katwebaze";
cohort = 10;
year = 2023;
console.log(firstName)
console.log(lastName)

// dealing with constants
const carName = "Harrier"
console.log(carName)
/*carName = "Mercedes"
console.log(carName)*/


// naming conventions
// camelcase eg firstName
// pascalcase eg FirstName
// snakecase eg first_name
// allcaps snakecase eg FIRST_NAME
// kebabcase eg first-name

let Fun 
console.log


// variable scope
let num1 = 5;
let num2 = 10;
if (num1>num2) {
console.log("num1 is greater than num2")
}
else{
    console.log("num2 is greater than num1")
}
