 //classes in javascript


const fs=require("fs");

class rectangle {
    constructor(length,width,color){
        this.length=length;
        this.width=width;
        this.color=color;
    }

    area(){
        const area=this.length*this.width;
        console.log(area);
    }

    color(){
        console.log(`color:${this.color}`)
    }
}

const rec=new rectangle(10,20,"blue");
rec.area();

/// there are some pre-defined claases in java 
//ex:map,date..etc


const date=new Date();
console.log(date.getDate());
console.log(date.toISOString());




//To perform various Async operations and to overcome callback hell, Ecmascript introduced new class call promises.
//We will try to understand promises from first principles....


function waitfor3sec(resolve){
    console.log(main);
    console.log(typeof main);
    setTimeout(resolve,3000);
}

function main(){
    console.log("3sec have passed");
}

waitfor3sec(main);



function random(){
    
}

let p= new Promise(random);
console.log(p);


function readtheFile(func){
    fs.readFile("a.txt","utf-8",function(data,err){
        console.log(data);
        func(data);
    })
}


function readfile(){
    return new Promise(readtheFile);
}


let p=readfile();

function callback(contents){
    console.log(contents);
}

p.then(callback);


function fetching(){
    return new Promise(forfetch);
}
function forfetch(resolve){
    console.log(resolve)
    let x= fetch("https://fakestoreapi.com/products/1").then(function(response){
        response.json().then(function (data){
            resolve(data);
        })
    });
    
}

let b=fetching();

function callback(abc){
    console.log(abc)
        
}

b.then(callback);

