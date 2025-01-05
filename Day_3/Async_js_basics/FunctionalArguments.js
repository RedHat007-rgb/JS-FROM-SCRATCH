

const fs = require("fs");

function read(err,data){
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
}

 fs.readFile("a.txt","utf-8",read);
fs.readFile("b.txt","utf-8",read);
console.log("done");
// read function is called when the file gets read and tells the js that Hey,File reading has been completed.
//Please take your data if youre free.