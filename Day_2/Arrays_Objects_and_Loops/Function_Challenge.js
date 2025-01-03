
//const calculateTotal=(subTotal,tax)=>subTotal+tax;

function calculateTotal(subTotal,tax){
    return subTotal+tax;
}
var order1=calculateTotal(200,50);
var order2=calculateTotal(200,90);
var order3=calculateTotal(200,100);

const order=[order1,order2,order3];
console.log(order);
//refactoring to function expression
const  calculateTotal1=function (subTotal,tax){
    return subTotal+tax;
}
