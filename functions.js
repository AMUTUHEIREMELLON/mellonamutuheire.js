// a function is a reusable block of code
// SYNTAX OF A FUNCTION
function functionName(){
    // function body/ statement
}

// example
// example of non- parametarised function
//functions without parameters
function add(){
    console.log(2 + 3)
}
add();//function invocation


// defining a parameterised function
function add2(a,b){
    console.log(a+b)
}
add2(4,6);


// THE RETURN KEYWORD
function add3(c,d){
    return (c+d)

}
console.log(add3 (45,3))

function add4(h,v){
    let sum = h+v
    return sum
}
add4()
    console.log(add4(4,5))
    console.log(add4(2))// the second argument is missing so the engin fills up with undefined
    // NaN becos 22 + undefined will give us Nan

    function greeting(){
        console.log("how are you?")
    }
    greeting()

    // VARIABLE SCOPE
    // local variable and global variables
    // A local variable has a limited scope(can be accesssed only inside a function where it is described)
    // A global variable has a global scope (it it declared outside and can be accessed by any)
    
    // examples of local variables
    function multiply(){
        let localVariable1 = 2;
        let localVariable2 = 3;
        let product = localVariable1*localVariable2
        return product
    }
    console.log(multiply())

    // function addition(){
    //     let total = localVariable1 + localVariable2;
    //     return total
    // }
    // console.log(addition())

// global variables
let globalVariable1 = 4;
let globalVariable2 = 6;
function multiply2(){
    let product = globalVariable1*globalVariable2
    return product
}
console.log(multiply2())

function addition2(){
    let total = globalVariable1 + globalVariable2
    return total
}
console.log(addition2())

// ARROW FUNCTIONS
const sum =(m,n) => {
    return m+n
}
console.log(sum(4,6))


// concise way of writing a non arrow funcction with one line of code in the body
const sum1 = (a,b) => a+b


// Example
const sum2 = (a,b) => {
    let result  = a+b
    return `The result is &{results} per the calculation`
}