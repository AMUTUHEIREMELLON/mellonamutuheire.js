// ENCAPSULATION
// a mechanism of restricting direct aaccess to some of the object components
//  a mechanism of 
//  there are two ways of encapsulation iun js
// 1. Making data members private using var/ let keyword
// set the data using setter methods and get the data using getter methods
// We can manage read and write acces of object properties using encapsulation
// Read Only Access: if we declare getter methods only ,the it facilitates the read only access
// Wright Only Access: if we 
// Read And Wright Access; if we declare both getter and setter methods, it facilitates both read and write access


// security-controlled access-guards an object against illegal access
// hide implementation and expose behaviour- helps to achieve a level without revealing its complex details
// Loose coupling - modify the implementation any time
// Make the application more flexible and mangeable
// simplifies the application

// example
class Worker{
    constructor(){
        // these are encapsulated
        let workName;
        let rating;
        let number;
    }
    // getter method
    getWorkName(){
        return this.workName;
    }
    // setter method
    setWorkName(workName){
        this.workName = workName;
    }
    // getter method
    getRating(){
        return this.rating;
    } 
    // setter method
    setRating(rating){
        this.rating = rating;
    }
    // getter method
    getNumber(){
        return this.number;
    }
    // setter method
    setNumber(number){
        this.number = number;
    }
}
let worker = new Worker();
worker.setWorkName("Justus")
worker.setRating(10)
worker.setNumber(101)
console.log(worker.getWorkName(), worker.getRating(), worker.getNumber())
console.log(worker)

// example 2
class Employee{
    setEmpDetails(EmpName, id, phoneNumber){
        this.EmpName = EmpName;
        this.id = id;
        this.phoneNumber = phoneNumber;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }
    getId(){
        return this.id;
    }
    getEmpName(){
     return this.EmpName;
    }
}
let Emp1 = new  Employee();
Emp1.setEmpDetails("Mellon", 1222245, "0784390341")
console.log(Emp1)