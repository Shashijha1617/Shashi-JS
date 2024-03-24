// // for of Loop
// const myArray = [1, 2, 3, 4, 5];

// for (items of myArray) {
//   console.log(items);
// }

// //ForEach Loop
// const MyArray2 = ["Shashi", "Amar", "Afroz", "Ashish", "Kishor"];

// MyArray2.forEach((element) => {
//   console.log(element);
// });

// //for in Loops
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// let myObj = {
//   game1: "NFS",
//   game2: "Spiderman",
//   game3: "WWE",
// };

// for (const key in myObj) {
//   console.log(`${key} : ${myObj[key]}`);
// }

// let languages = ["JavaScript", "Python", "Php", "Swift", "Ruby", "C++", "C#"];

// for (let language in languages) {
//   console.log(`${language} : ${languages[language]}`);
// }

// //Map

const map = new Map();

map.set("In", "India");
map.set("Uk", "United States");
map.set("Ch", "China");
map.set("Bz", "Brazeel");
map.set("In", "India");
map.set("Ca", "Canada");

// console.log(map);

// for (let [key, value] of map) {
//   console.log(`${key} : ${value}`);
// }

for (let [key, value] in map) {
  console.log(key, value);
}
