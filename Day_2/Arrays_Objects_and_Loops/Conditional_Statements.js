
const value=false;
console.log(typeof value);

if(value){
    console.log("hello world");
}else{
    console.log("hello me")
}

if(!value){
    console.log("value is false");
}

const num1=6;
const num2=9;
const result=num1>=num2;
console.log(typeof result)
if(num1>num2){
    console.log("first>second");
}
else if (result){
    console.log("equal");
}
else{
    console.log("second>first");
}