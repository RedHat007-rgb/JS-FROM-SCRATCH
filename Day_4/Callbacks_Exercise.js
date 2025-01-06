/*
Write a function prepareCoffee that simulates making coffee. 
It should wait for 1 second to brew, 
then pass a message ("Coffee is ready!") to a callback.
*/


function prepareCoffee(tobecalled){
    setTimeout(() => {
        tobecalled();
    }, 1000);
}

function callback(){
    console.log("your coffee is ready");
}

prepareCoffee(callback);

/*
Write a function addNumbers that takes two numbers and a callback. 
It should add the numbers and pass the result to the callback function.
*/

function addNumber(a,b,callback){
    c=a+b;
    callback(c);
}

function printing(final){
    console.log(final);
}

addNumber(4,5,printing);

/*
Write a function orderPizza that simulates ordering pizza.
After 2 seconds, it should pass the message "Pizza ordered!" to the callback. 
Then, create another function deliverPizza that will deliver the pizza 3 seconds after
it is ordered and pass the message "Pizza delivered!" to the callback.
*/

function OrderPizza(callback){
    setTimeout(function(){
        message="pizza ordered";
        callback(message);
    },2000)
}

function callback(message){
    console.log(message);
    setTimeout(() => {
        console.log("pizza delivered")
    }, 3000);
}

// OrderPizza(callback);
/*
Question: Write a function to sort an array of objects based on a 
property (e.g., age) using a callback function. Example:
javascript

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 35 },
    { name: "Eva", age: 22 }
];
The result should sort the array by age.
*/

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 35 },
    { name: "Eva", age: 22 }
];

function sortByAge(array,callback) {
    
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].age > array[j + 1].age) {
                // Swap the elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    callback(array);
}

function callback(p){
    console.log(p);
}

sortByAge(people,callback);