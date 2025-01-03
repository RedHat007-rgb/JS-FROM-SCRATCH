//We will learn switch statement

const dice=1;

// we will be understanding first with if statement

if(dice==1){
    console.log("1");
}


if(dice==2){
    console.log("2");
}
else{
    console.log("you didn't roll the dice")
}


//else if

if(dice==1){
    console.log("1");
}
else if(dice==2){
    console.log("2");
}
else if(dice<1 || dice>6){
    console.log("you didn't roll the dice")
}

//Now ,We will be understandinhg how to write conditional 
//statements using switch statements

switch(dice){
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("you didnt roll the dice");
}