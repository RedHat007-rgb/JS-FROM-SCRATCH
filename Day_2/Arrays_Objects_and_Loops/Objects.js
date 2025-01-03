
//Learning about Objects

const person={
    name:"john",
    lastname:"smith",
    age:40,
    education:false,
    married:false,
    sibling:["susy","anna","lucky"],
    greeting:function (){
       return console.log("hello my name is john")
    }
}

console.log(person.name);
console.log(person.sibling[1]);
person.greeting();

