// Inherintance
// A process where one class acquires properties (methods and fields) from another class
//  Parent class-- Child class
//  Super class--sub class
// Base class-- Derived class

// Example
// Parent class
class Car{
    setName(carName){
        this.carName = carName;
    }
    getName(){
        // return this.carName;
        console.log("This car name is ",this.carName)
    }
    startEngine(){
        console.log("Starting the engine for ",this.carName)
    }
    stopEngine(){
        console.log("Stopping the engine for ",this.carName)
    }
}

// child class
class Toyota extends Car{
    topSpeed(speed){
       console.log("Top speed for " +this.carName+ "is" + speed )
    }
}
let myCar = new Toyota()
myCar.setName("Benz")
myCar.getName()
myCar.startEngine()
myCar.stopEngine()
myCar.topSpeed("200km/hr")