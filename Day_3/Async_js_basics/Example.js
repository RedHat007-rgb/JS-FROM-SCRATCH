// //Example of JS-Singlethreaded

// //We will encounter a new problem after writing this code.



// boilWater(10000);
// console.log("chop onion");
// boilWater(5000);
// console.log("chop carrot");
// boilWater(5000);

// function boilWater(time){
//     console.log("boiling");
//     for(let i=0;i<time;i++){
//         console.log("still not done");
//     }
//     console.log("done");
// }
// //as  first line of code is executed,We cant chop carrots because we are still boiling water.
// // For doing the things simultaneously,Async Js has been introduced.