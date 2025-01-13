//import chalk from "chalk";//modern import syntax..... before we used require i.e......,const chalk=require("chalk")


/*
    There are three types of files in js:
    1).js
    2).mjs(module)
    3).cjs(common)
*/
const path=require("path");
const fs=require("fs");
//console.log(chalk.blue("Hello World........."));
//console.log(chalk.blackBright.bold.underline("Happy......................"))
//console.log(__dirname);



//External dependencies: There are some dependencies where you can use them by installing from npm(node package manager).
//Example:chalk,express  .......etc

/*
 "chalk": "^5.4.1"
We will understand the number on the right side:MAJOR.MINOR.PATCH

*/



const pathname=path.join(__dirname+"/a.txt");
fs.readFile(pathname,"utf-8",(err,data)=>{
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
})