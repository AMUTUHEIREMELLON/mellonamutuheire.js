// if statements
// if... else statement
// if... else if statement
// the syntax of an if statement
// if (){}
// if (expression){
    // statements to be executed if expression is true 
// }
// else{
    // statements to be executed if expression is false
// }
// example
let weather = "shinning";
if (weather == "shinning"){
   console.log("we go swimming")
}else{
    console.log("stay in the house and watch a movie")
}

let age = 12;
if (age > 18){
    console.log("you are eligible to get a driving licence")
}else if(age == 18){
    console.log("you just became eligible to get a driving licence")
}else{
    console.log("you are not eligible to get a driving licence")
}

// Ternary operator
// condition ? printed statement if condition is true: printed statement if condition is false

let cloudy = "carry your jacket";
let shinny = "wear light clothes";
console.log(weather == "cloudy"? cloudy: shinny)

// Switch statement or switch case
// examples
let startRating = 1;
switch(startRating){
    case 1:
        console.log("very bad");
        break;
    case 2:
        console.log("bad");
        break;    
    case 3:
        console.log("average");
        break;
    case 4:
        console.log("good");
        break;
    case 5:
        console.log("excellent");
        break;
    default:
        console.log("please enter a valid number between 1 and 5");            
}

// example2.
let car = "subaru";
switch(car){
    case "mercedes":
        console.log("very fast");
        break;
    case "subaru":
        console.log("luxirious");
        break;
    case "bentley":
        console.log("classy");
        break;
    case "prado":
        console.log("big");
        break;
    default:
        console.log("please enter a valid car model");  
}

// exaple3.
let fruits = ["apples", "mangoes", "oranges", "pineapples"];



switch(fruits){
case "mangoes":
    console.log("delicious");
    break;
case "watermelon":
    console.log("waterly");
    break;
case "lemon":
    console.log("bitter");
        break;
default :
console.log("please enter a valid message");
}

switch(new Date().getDay()){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
        case 3:
            console.log("wednesday");
            break;
    default:
        console.log("please enter a valid day");
}

let ballColor = "green";
switch(ballColor){
    case "red":
        console.log("the ball is red");
        break;
    case "blue":
        console.log("ball is blue")
        break;
    default:
        console.log("please enter a valid ball color")
}
