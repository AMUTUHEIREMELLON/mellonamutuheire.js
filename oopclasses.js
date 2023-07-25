// A class is a blueprint of an object
// A class should always have its name in singular

// THIS keyword refers to the object of the class
// syntax of a class
class ClassName{
    statements
} 
// example
class Employee{
    // a class always has a constractor which is always
    // called whenever a class is instantiated
    constructor(name, id, gender, age, color, education){
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.color = color;
        this.education = education;

 }
}
// an oobject is an infant of the main class

// creating objects of employee class
let emp1 = new Employee("Mellon", 1, "female", "20", "chocolate", "UACE");
let emp2 = new Employee("Monicah", 2, "female", "20", "chocolate", "UACE");
console.log(emp1);
console.log(emp2);

// dot notation
console.log(emp1.name);
console.log(emp2.name);

// bracket notation
console.log(emp1["gender"])
console.log(emp2["gender"])

class Car{
    constructor(carName, manufacturer, speed, color){
        this.carName = carName;
        this.manufacturer = manufacturer;
        this.speed = speed;
        this.color = color;
    }
}

let car1 = new Car("vitz", "toyota", "100km/hr", "black");
console.log(car1);