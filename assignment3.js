// 1a. Create 10 different classes with 5 objects out of each class

1.
class Fruit{
    constructor(fruitName, color, size, taste, fruitType){
        this.fruitName = fruitName;
        this.color = color;
        this.size = size;
        this.taste = taste;
        this.fruitType = fruitType;
    }
}
let fruit1 = new Fruit("Mango", "Green", "small", "sweet", "drupe");
console.log(fruit1)



2.
class Electronics{
    constructor(name, storage, price, speed, camera){
        this.name = name;
        this.storage = storage;
        this.price = price;
        this.speed = speed;
        this.camera = camera;
    }
}
let Electronics1 = new Electronics("phone", "64GB", "1M", "56op", "45ultra");
console.log(Electronics1)


3.
class Girl{
    constructor(girlName, height, color, age, nationality){
        this.girlName = girlName;
        this.height = height;
        this.color = color;
        this.age = age;
        this.nationality;
    }
}
let Girl1 = new Girl("Mellon", "156cm", "Chocolate", "20", "Ugandan")
console.log(Girl1)




4.
class Animal{
    constructor(animalName, type, feed, color, habitat){
        this.animalName = animalName;
        this.type = type;
        this.feed = feed;
        this.color = color;
        this.habitat = habitat;
    }
}
let Animal1 = new Animal("cow", "domestic", "grass", "black", "kraal")
console.log(Animal1)

class Flower{
    constructor(flowerName, flowerType, petalNumber, sepalNumber, petalColor){
        this.flowerName = flowerName;
        this.flowerType = flowerType;
        this.petalNumber = petalNumber;
        this.sepalNumber = sepalNumber;
        this.petalColor = petalColor;
    }
}
let Mellon = new Flower("Hibiscus", "regular", 5, 5, "pink")
console.log(Mellon)


5.
class Vehicle{
    constructor(model, type, numberOfWheels, speed, price){
        this.model = model;
        this.type = type;
        this.numberOfWheels = numberOfWheels;
        this.speed = speed;
        this.price = price;
    }
}
let Veh = new Vehicle("x", "tesla", 4, "540km/hr", "500M")
console.log(Veh)
let Veh1 = new Vehicle("y", "Landrover", "4", "200km/hr", "100M")
console.log(Veh1)




6.
class Cloth {
    constructor(brand, size, color, type, release){
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.type = type;
        this.release = release;
    }
}

let cloth1 = new Cloth("guchi", 10, "black", "dress", 2020);
let cloth2 = new Cloth("Dolce&Gabbana", 8, "blouse", "black", 2015);
console.log(cloth1);
console.log(cloth2);





7.
class House {
    constructor(rooms, roofing, flooring, owners, finishing){
        this.rooms = rooms;
        this.roofing = roofing;
        this.flooring = flooring;
        this.owners = owners;
        this.finishing = finishing;
    }
}

let housep = new House(5, "hipped", "tiled floor", 6, "plastered");
let houseb = new House(3, "Gable", "cemented", 2, "plastered");
console.log(housep);
console.log(houseb);



8.
class Mother {
    constructor(name, spouse, children, nationality, age){
        this.name = name;
        this.spouse = spouse;
        this.children = children;
        this.nationality = nationality;
        this.age = age;
    }
}

let mother1 = new Mother("Grace","Joseph", 4, "Ugandan", 45)
let mother2 = new Mother("Martha", "Mark", 2, "Kenyan", 28)
console.log(mother1);
console.log(mother2);



9.
class Country {
    constructor(president, independence, population, sectors, forests){
        this.president = president;
        this.independence = this.independence;
        this.population = population;
        this.independence = independence;
        this.sectors = sectors;
        this.forests = forests;
    }
}

let country1 = new Country("Uganda", 1962, "40million", 6, "many");
let country2 = new Country("USA", "Unknown", "75million", 10, 4)
console.log(country1);
console.log(country2);



10.
class Person{
    constructor(tribe, personName, age, occupation, origin){
    this.tribe = tribe;
    this.personName = personName;
    this.age = age;
    this.occupation = occupation;
 }
}
let person1 = new Person("luo", "Jim", 23, "Teacher", "Northern")
console.log(person1)



// 1b.Use the dot notation and bracket notation to print out atleast 2 properties for each Object

1.
console.log(fruit1.color)
console.log(fruit1.fruitType)

console.log(fruit1["taste"])
console.log(fruit1["fruitName"])

2.
console.log(Electronics1.price)
console.log(Electronics1.name)

console.log(Electronics1["storage"])
console.log(Electronics1["speed"])

3.
console.log(Girl1.age)
console.log(Girl1.height)

console.log(Girl1["age"])
console.log(Girl1["nationality"])

4.
console.log(Mellon.flowerName)
console.log(Mellon.sepalNumber)

console.log(Mellon["petalNumber"])
console.log(Mellon["petalColor"])


5.
console.log(Veh.numberOfWheels)
console.log(Veh1.numberOfWheels)

console.log(Veh["model"])
console.log(Veh1["model"])


6.
console.log(cloth1.brand)
console.log(cloth1.color)

console.log(cloth2["type"])
console.log(cloth2["size"])


7.
console.log(housep.rooms)
console.log(housep.flooring)

console.log(houseb["owners"])
console.log(houseb["roofing"])

8.
console.log(mother1.age)
console.log(mother1.children)

console.log(mother2["name"])
console.log(mother2["spouse"])


9.
console.log(country1.forests)
console.log(country2.forests)

console.log(country1["president"])
console.log(country2["president"])


10.
console.log(person1.age)
console.log(person1.occupation)

console.log(person1["personName"])
console.log(person1["tribe"])
   

