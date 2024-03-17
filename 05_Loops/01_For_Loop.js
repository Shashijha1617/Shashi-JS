// //For Loops

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   console.log(i * 2);
//   console.log(i * 3);
//   console.log(i * 4);
// }

// let arr = ["Shashi", "Rohit", "Vishal", "Ronak", "Afroz", "Amar"];

// for (let i = 0; i < arr.length; i++) {
//   const element = i;
//   if (element == 3) {
//     console.log("Shashi is Best Developer");
//   }
//   console.log(arr[element]);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`Table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

//For Loops With Break Condition
// for (let i = 0; i <= 10; i++) {
//   if (i == 5) {
//     console.log("Stopping Process");
//     break;
//   }
//   console.log(`Process Running step : ${i}`);
// }

//For Loops With Continue Condition
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`Stopping Process only ${i} prosess`);
    continue;
  }
  console.log(`Process Running step : ${i}`);
}
