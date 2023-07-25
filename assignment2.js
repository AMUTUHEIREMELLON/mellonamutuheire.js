// assignment
 //1. create five if statements
//2. create five switch cases
//3. create a switch case for arrays



// 1.a
let number= 9;
if (number > 10){
      console.log("number is greater than 10");
    }else{
        console.log("number is less than or equal to ten");
    }
// 1.b
let gender = "female";
if (gender == "female"){
    console.log("a dress");
}else{
    console.log("a pair of trousers");
}

// 1c.
let ballColor = "red";
if (ballColor == "blue"){
console.log("put it in box 1")
}else{
    console.log("put it in box 2");
}

// 1d.
let phoneType = "Infinix";
if (phoneType == "Iphone"){
console.log("ls classy");
}else{
    console.log("Is cheap");
}

// 1e.
let size = "60kg";
if (size < "60kg"){
    console.log("under weight");
}else{
    console.log("overweight");
}

// 2.a
let studentStream = "Red";
switch(studentStream){
    case "Blue":
        console.log("go to stream Blue");
        break;
    case "Green":
        console.log("go to stream Green");
        break;
    case "Purple":
        console.log("go to stream purpl");
    default :
    console.log("go to the staffroom");
    
}

// 2b.
let girlName = "Elsbeth";
switch(girlName){
    case "Reena":
        console.log("Playful");
        break ;
    case "Sheena":
        console.log("Intelligent")
        break ;
    case "Betty":
        console.log("Lazy");
        break ;
    default :
        console.log("naughty");
}

// 2c.
let color = "blue"
switch(color){
    case "red":
        console.log("stop")
        break;
    case "green":
        console.log("move")
        break;
    case "yellow":
        console,log("slow down")
        break;
    default :
        console.log("cross")
        break;
}

// 2d.
let m = 6;
switch(m){
    case 1:
        console.log("very luck");
        break;
    case 2:
        console.log("lucky");
        break;
    case 3:
        console.log("slightly lucky");
        break;
    default :
        console.log("unlucky");
        break;
}

// 2d.
let boyHeight = "150cm"
switch(boyHeight){
    case "150cm":
        console.log("the boy is short");
        break;
    case "170cm":
        console.log("the boy is tall");
        break;
    default :
        console.log("the boy has medium height");
        break;
}

// 2e.
let bookType = "Classic";
switch(bookType){
    case "A14":
      console.log("Affordable");
      break;
    case "picfare":
        console.log("Longlasting")
        break;
    case "Budget":
        console.log("old fashioned");
        break;
    default :
    console.log("please enter a valid booktype")
    break;
}

// 3.
let talents = ["singing", "dancing","praying"];
for (r = 0; r < talents.length; r++)
switch(talents[r]){
    case "singing":
        console.log("they can sing");
        break;
    case "dancing":
        console.log("they can dance");
        break;
    case "praying":
            console.log("they can pray");
            break;
    default:
        console.log("unknown talent");
        break;
}

     