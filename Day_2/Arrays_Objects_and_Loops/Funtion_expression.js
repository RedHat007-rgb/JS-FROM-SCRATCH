//function declaration
function addValues(num1,num2){
    return num1+num2;
}

//function expression

const multiply=function (num1,num2){
    return num1*num2;
}

const firstValue=addValues(3,4);
const secondValue=addValues(9,11);
const thirdValue=multiply(3,4);
const values=[firstValue,secondValue,thirdValue];
console.log(values);


//Defining an arrow function which is new way of writing function.

const multiplicate=(num1,num2)=>num1*num2;
