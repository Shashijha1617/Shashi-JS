const userEmail = "shashi@gmail.com";

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("User Email Not Found");
}

const UserName = "";

if (UserName) {
  console.log("Got User Name");
} else {
  console.log("User Name Not Found");
}

//Falsy Values
// false , 0, -1, BigInt 0n, " ", null, NaN, undefined

//Truthy Values
// true, 1, "value", "0" , "false", {}, [], function(){}

const userMobile = [];

if (userMobile.length === 0) {
  console.log("User Mobile not Found in Array");
} else {
  console.log("User Mobile Found");
}

const userDob = {};

if (Object.keys(userDob).length === 0) {
  console.log("User DoB not Found in Object");
} else {
  console.log("User DoB Found");
}

//Nullish Coalescing Operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15;
// val1 = undefined ?? 20;
val1 = null ?? undefined ?? 10 ?? 20;

val1;

// Ternary Operator
// condition ? true : false

const age = 17;
age >= 18 ? console.log("Your an adult") : console.log("You are Minor");
