const car={
    make:" ECLIPSE",
    model:"BMW",
    year:2025,
    colors:["green","yellow","red"],
    drive(){
        console.log("I have driven BMW 2030");
    },
    stop(){
        console.log("I have driven BMW 2040");
    }
}

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();