// For loops
// while loops
// Do while loops

// 1. For loops
// for (initialisation; condition; increament){
    // body
// }
let studentNumber;
for(studentNumber = 0; studentNumber <= 10; studentNumber++){
console.log("value of a student number is: "+ studentNumber);
}

let oddNumbers;
for(oddNumbers = 1; oddNumbers <= 10; oddNumbers+=2){
    console.log("value of a odd numbers is: "+ oddNumbers);
    }

    // for of_loop
    // 
    // 
    // for(element of iterable){
        // body of  for..of
    // }

    const stringA = "Pearl";
    for (let i of stringA){
        console.log(i);
    }

    fruits = [{"apples":10},{"berries":6},{"grapes":12}]
    for (fruit of fruits){
        console.log(fruit);
    }

    // for in loops
    // the for in loops allow you to iterate over all the property loops in keys of an object
    // 





    const string2 = "refactory";
    for( i in string2){
        console.log(string2[i])
    }

    // while loops
    let counter = 0;
    while(counter <= 10){
        console.log("counter is= "+ counter)
        counter++
    }

    // do while
    // there is an execution even when the condition is false
    // normally not used because of the loop hole it has
    let counter2 = 20;
    do{
        counter2--
        console.log("value of counter is = "+ counter2)
    }while(counter2 >= 0)