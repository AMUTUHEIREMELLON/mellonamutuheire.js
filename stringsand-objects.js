// there are a number of operations available for strings
// converting a string to upper/lower case 
// removing  specified xters
// determining the length or number of characters
// taking the alphabetical odering of the string values 
// removing leading or trailing white space from values
// extract the last or last n xters from a string 

// 1.declaration
let string1 = "going to school"


// 2.Escape sequences
let escape1  = "he said, 'hi there'"
let escape2 = "he said,\"hi there\""
let escape3 = 'he said,\'hi there\''
let escape4 = 'he said, "hi there"'
console.log(escape1)
console.log(escape2)
console.log(escape3)
console.log(escape4)

// 3.concactenation
let string2 = "God made man"
let string3 = "Man made man"
console.log(string2 + " and " + string3)

// 4. string literals
let string4 = "puppy"

// 5. string interpolation
// is a handy way to merge javascript expressions with strings
// the basic syntax is
// `something ${expression} something`
let age = 23;
console.log(`Justus is ${age} years old`)

// string methods
// a.string length
// the length  property returns the length of the string
let myString = "abcdefghijklmnopqrstuvwxyz"
console.log(myString.length)
// b.extracting parts of a string
// slice(start,end)
// slice extracts a part of a string and returns the new part in a new string
// the method
console.log(myString.slice(7,13))
console.log(myString.substring(4,9))
// datatype inversion
let num = 4
let num2 ="9"
console.log(num + num2)
console.log(num + Number(num2))
let num3 = 9
let num4 =7
console.log(num3 + num4)
console.log(num3 + String(num4))

// objects store a collection of key value pairs 
// each item in the collection has a 
let person = {firstName: "mellon", age:20 , hobbies:["reading novels","playing football"]}
// accessing properties of an Object

// 1.dot notation
console.log(person.age)
console.log(person.hobbies)

// bracket notation
console.log(person["age"])
console.log("mellon is " + person.age + " years old")

// adding properties to an object
person.height = "156cm"
console.log(person)
person["gender"] = "female"
console.log(person)

// Deleting properties of an object
// delete removes the key value pair from the object and returns true
// unless it cannot delete the property ie if the property is non configurable
console.log(delete person.age)
console.log(person)
console.log(delete person["gender"])
console.log(person)

// object immutability
// you can not change assignment to a constant variable
// const declaration prohibits changing what thing the constant points to, but it does not prohibit changing the content of that thing
// thus we can change a property in aconstant object but we cant change which object the constant points to
const myObject = {girl:"Monica", gender:"female"}
console.log(myObject)
myObject.girl = "Mellon"
console.log(myObject)
/*myObject = {height:"154cm", color:"chocolate"}
console.log(myObject)*/
myObject.height = "154cm"
console.log(myObject)
myObject.color = "chocolate"
console.log(myObject)
console.log(delete myObject["height"])

// Object freeze
// the object.freeze method is used to freeze an object
// freezing an object doesnot allow new properties to be added
// to the object and prevents removing or altering the existing properties
// object.freeze preserves the enumerability, configuribility, writability and prototype of the object
const myObject2 = Object.freeze({boyName:"Justus", age:22, city: "Mbarara"})
console.log(myObject2)
myObject2.boyName = "Mark"
myObject2.city = "Kampala"
myObject2.class = "javascript"
console.log(myObject2)





















0



