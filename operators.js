// An operator is a symbol which usually represents an action or 
// eg let sum = 10 + 20 
//  = this is an assignment opreator
//  +  thi is an arithmetic operator(addition)

// lit of operators
// arithmetc operators
// aignment operators
// comparison operators
// logical operators
// type operators
// bitwise  opreators

// arithmetic operators
// + addition
// - subtraction
// * multiplication
// / division
// % modulus(remainder of division)
// ** exponential
// ++ Increment
// -- decrement

// let z = 6 + 2
// 6 and 2 are called operands on which the operator work

// Addition
let x = 8;
let y = 4;
let result1 = x+y
console.log(result1)

// Subtraction
let result2 = x-y
console.log(result2)

// mulitiplication
let result3 = x*y
console.log(result3)

// division
let result4 = x/y
console.log(result4)

// modulus
let result5 = x%y;
console.log(result5)

// exponential
let result6 = x**y
console.log(result6)

// increment
// post-increment
var monny = 6
// with post, you increase value after action
let result7 = 2 + monny++
console.log(result7)
console.log(monny)

// pre-increment
var renee = 9;
let result8 = 5 + ++renee
// increase value before action is done
console.log(result8)


// decrement
// post-decrement
var wills = 6;
let result9 = 10 + wills--
console.log(result9)

// pre-decrement
var liam = 5;
let result10 = 10 + --liam
console.log(result10)


// Increamenting by more than one
var Tom = 5;
Tom += 2
console.log(Tom)

// Assignment operators
// 1.= assign
// eg
let Hana = 12;

// 2.+= add and assign
// eg
var Isma = 21;
Isma += 2;
console.log(Isma);

// 3. -= sub and assign
Isma -= 3;
console.log(Isma);

// 4. *= multiply and assign
Isma *= 2;
console.log(Isma)

// 5./= divide and assign
Isma /=4;
console.log(Isma)

// 6. %= modulus and assign
Isma %=3;
console.log(Isma)

// 7. **= exponential and assign
Isma **= 2;

// Comparison operators

// 1. == equal to 
var change1 = 20;
var change2 = 30;
var change3 ="30";
var change4 = 20;

// eg
console.log(change1 == change2)
console.log(change2 == change3)
console.log(typeof change2)
console.log(typeof change3)

// 2.=== strict equal(equal value and datatype)
console.log(change2 === change3)

// 3. != not equal to (!negation)
console.log(change1 != change4)
console.log(change2 != change3)

// 4. !== strict not equal (not equal in value and type)
console.log(change2 !== change3)

// 5. > greater than 
console.log(change1>change2)

// 6. < less than 
console.log(change1 < change2);

// 7. >= 
console.log(change1>=change4);

// 8. <=
console.log(change1 <= change2);

// ? Ternally operator
/*
ternally operator is like if- then - else
it takes arguments
condition ? value if true: value if false
*/
let age = 11;
let answer = age > 18 ?"you can have a national id": "you are below age so no id";
console.log(answer)

//  if( age > 18 ){
//     console.log("you can have a national IdleDeadline");
// }else {
//     console.log("you are below age");
// }


// logical operators
let Tim = true;
let John = false;
let Mary = true;
let Martha = false;
// 1. && logic AND - returns true if both conditions are true
console.log(Tim && John)
console.log(Tim && Mary)
// or
console.log((age > 10) && (change1 > change2))

// false and false -result is false
// false and true - the result is false
// true and false - result is false
// true and true - result true

// 2. || -logical OR - returns true if any of the condition is true
console.log(Tim || John)
console.log(Tim || Mary)
// false or false -result is false
// false or true - the result is true
// true or false - result is true
// true or true - result true
 
// 3. ! - logical NOT- return true if the condition is false and viceversa
console.log( !Martha)
console.log(!Tim)

// read about bitwise operators

// type operators
// in javascript there aretwo type operators ie
// typeof and instanceof
// typeof returns the type of a variable
// we can use typeof to findthe data type of a javascript variable
// instanceof returns true if an Objecttype
// the instanceof returns an boolean value if an object is an instanceof a particular class

// eg of typeof
let girl1 = 20
let girl2 = "beautiful"
console.log(typeof girl1)
console.log(typeof true)
console.log(typeof NaN)
console.log(typeof [1,2,3])
console.log(typeof {lastName :"Mellon", age : 20})
console.log(typeof null)
console.log(typeof function(){})
console.log(typeof Justus)

// examples of instanceof
let lastName = new String("Doe")
let num1 = new Number(123);
console.log(lastName instanceof String)
console.log(num1 instanceof Number)






