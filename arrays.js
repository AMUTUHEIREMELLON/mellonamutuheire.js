// arrays 
// store multiple values in a single variable

let number = [1,2,3,4,5]
console.log(number);
let alpha = ["mangoes", "appes", "strawberries", "passion fruits"]
console.log(alpha);

let cars = new Array("prado", "Mercedes", "Bentley")
console.log(cars);

// printing out a particular car from tat array
console.log(cars[1]);

cars[1] = "BMW";
console.log(cars);

alpha.push("jackfruits");
console.log(alpha);

// finding the length of the array
console.log(alpha.length);

// array methods
// pop mthod
// it removes the last element from the Array

alpha.pop()
console.log(alpha);

// shift method
// it removes the first element from the array
alpha.shift()
console.log(alpha);

// unshift method  
// it adds anew element at the begininning of the array
alpha.unshift("Bananas");
console.log(alpha);

// the join method
// it joins the elements of an array inti a string
let string = alpha.join(" ");
console.log("..........",string);

// Deleting an item from an array
// this deletes the Element at the specified index but doesnot delete the index
console.log(cars);
delete cars [1];
console.log(cars);

cars[1] = "Rav4";
console.log(cars);


// splice method
// it removes elements from to the splecified indices
cars.splice(1,2);
console.log(cars);

cars.splice(2,0,"premo", "jeep")
console.log(cars);

// slice methhod
let newcars = cars.slice(1,3)
console.log(newcars);

// concat method
let evenNumbers = [2,4,6,8];
let oddNumbers = [1,3,5,7,9]
let primeNumbers = [3,5,7];
let allNumbers = evenNumbers.concat(oddNumbers,primeNumbers)
console.log(allNumbers)


// nested arrays or multidimension arrays
let hobbies =[["swimming",5],["reading novels",6],["gaming",7],["sleeping","the winner",["running",3]]];
console.log(hobbies);

// print out the first item from second sub array
console.log(hobbies[1][0])
console.log(hobbies[2])

// print out first item from second sub array
console.log(hobbies[1])

console.log(hobbies[1][0])
console.log(hobbies[3][1])

// to print chess
console.log(hobbies[3][2][0])

// remove elements from a sub array
hobbies[2].pop()
console.log(hobbies)

// adding elemennt to a sub array
hobbies[3].push("Dancing")
console.log(hobbies)

// to delete an element from a main array
hobbies.splice(0,1)
console.log(hobbies)

// adding a sub array
console.log("this is the beginning of some other evample", hobbies)
hobbies.splice(1,0,["jazzing",3])
console.log(hobbies)

let myHobbies =[["swimming",5],["reading novels",6],["gaming",7],["sleeping","the winner",]];
myHobbies.forEach((hobby)=>{
    hobby.pop(1)
})
console.log(myHobbies);

// flatten array
// when we flatten the array
let mHobbies =[["swimming",5],["reading novels",6],["gaming",7],["sleeping","the winner",]];
const kasheshe = mHobbies.flat()
console.log(kasheshe);