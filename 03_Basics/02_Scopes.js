// var c = 400;
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// c;
// a;
// b;

// let a = 400;
// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log("Inner value of a is = " , a);
// }

// a;
// b;

// const b = 400;
// if (true) {
//   const b = 20;
//   console.log("Inner value of b is = ", b);
// }
// b;

function one() {
  let userName = "shashi";

  function two() {
    let website = "Youtube";
    console.log("from Global Scope:", userName);
    console.log("from Local Scope:", website);
  }
  // console.log(website);

  two();
}

one();

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

console.log(addOne(5));

console.log(addTwo(5)); // Error : Cannot Access "addTwo" before initialization
const addTwo = function (number) {
  return number + 2;
};

console.log(addTwo(5));
