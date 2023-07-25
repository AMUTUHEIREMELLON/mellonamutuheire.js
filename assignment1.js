// Create two string variables
//CREATE 2 NUMBER VARIABLES
// USECONCATINATION
//USE ESCAPE X-TERS
//CREATE 3 OBJECTS WITH 2 PROPERTIES
//(a)CONST
//(b)CONST.FROZEN
//(c)OBJECT
//ADD 2 PROPERTIES TO EACH
//DELETE ONE PROPERTIES FROM EACH


//1. Create 2 string variables

let gentName = "James";
let ladyName = "Martha";

//2. Create two number variables
//NO.2
let num2 = 3;
let num4 = 1;

//3. Use concatination
console.log(gentName + " and " + ladyName);

//4.Use escape characters
let escape2 = "He said,\"hi there\"";
console.log(escape2)


//5a
let animal = {name:"Bohkar",rijen:"codem"};

//b.
const animal2 = {name:"Namanya", rijen:"Action"};

// c/.
const animal3 = Object.freeze({name:"Karamu", rijen:"Fantasy"});
console.log(animal)
console.log(animal2)
console.log(animal3)

// NO.6
animal.ma = "Polar";
console.log(animal)
animal["nyope"] =  "Monica Amutuheire";
console.log(animal)

animal2.ma = "Mirembe Mellon";
console.log(animal2)
animal2["nyope"] = "Dera";
console.log(animal2)

animal3.ma = "Panu";
console.log(animal3)
animal3["nyope"] ="Jetie";

//NO.7
console.log(delete animal.rijen)
console.log(animal)
console.log(delete animal2.name)
console.log(animal2)
console.log(delete animal3.nyope)
console.log(animal3)