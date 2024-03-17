// //if Statement

// const isLiggedin = true;

// if (isLiggedin) {
//   console.log(`User is loggedin`);
// }

// let age = 50;

// if (age < 18) {
//   console.log("You are a minor and not elegible to vote");
// } else if (age == 18) {
//   console.log("Congratulation You are First Timer Voter");
// } else {
//   console.log("You are elegible to Vote");
// }

// // using operators  >, <, >=, <=, !=, ==, ===

// let testScore = 600;
// let testScore2 = 800;

// if (testScore > 600) {
//   console.log(`Test Completed`);
// }
// if (testScore >= 600) {
//   console.log(`Test Completed`);
// }
// if (testScore <= 600) {
//   console.log(`Test Completed`);
// }
// if (testScore < 600) {
//   console.log(`Test Completed`);
// }

// if (testScore != testScore2) {
//   console.log("test Completed");
// }

// let StringNumber = "600";

// if (StringNumber == 600) {
//   console.log("Test Done");
// }
// if (StringNumber === 600) {
//   console.log("Test Done");
// } else {
//   console.log("Test Failed");
// }

// // Scope in If Statements try let and var
// let score = 300;

// if (score >= 300) {
//   // let Power = "Fly";
//   // console.log(`User power is : ${Power}`);
//   var Weight = "80Kg";
//   console.log(`User Weight is : ${Weight}`);
// }

// // Power;
// Weight;

// // emplesit scope or assumed scope for single line or comma seprated multiline scope
// // Not Recomanded for effeciency and clean code
// const balance = 1000;

// // if (balance >= 1000)
// //   console.log("Balance Available"),
// //     console.log("Balance is More than or equal to 1000");

// if (balance >= 1000) {
//   console.log("Balance Available");
//   console.log("Balance is More than or equal to 1000");
// }

const loggedIn = true;
let debitCard = true;
let creditcard = false;

if (loggedIn && debitCard) {
  console.log("user is loggedin and also having devit card");
}

if (creditcard || debitCard) {
  console.log("user is active either he has Debit Card or Credit Card");
}
