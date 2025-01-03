// Arrays

//Creating an Array

const fruits=["apple","banana","custard apple",90];

//assigning a first fruit to the variable

const first_fruit=fruits[0];

console.log(first_fruit); 
 fruits[3]="lemon";

 console.log(first_fruit,fruits);

 //Creating a Function

 function helloAnna(){
    console.log("Hello there Anna");
    
 }

  function helloBob(){
    console.log("Hello there bob");
    
 }

 function helloSusy(){
    console.log("Hello there Susy");
 }

// Calling or Invocating A Function
helloAnna();
helloSusy();
helloBob();

//Arguments and Parameters

// parameters/Local variable/placehpolders all are same
function greet( name){
    console.log("Hi there " + name)
}
//while calling we need to pass a value to the namei i.e..., Argument....
// String susy is an argument.
greet("susy")
greet(4)

//Converting inches to centimeters


const wallHeight=90;

function calculation(value){
    //console.log("The value in cms is "+ value*2.54);
    return value*2.54;
}

calculation(200);

const width=calculation(100);
console.log(width);
const height=calculation(wallHeight);
const dimensions=[height,width];
console.log(dimensions);

