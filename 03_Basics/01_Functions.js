// //sayMyName()

// function add(num1, num2 , num3){
//     console.log(num1 + num2 + num3);
// }

// add(1, 5, 10)
// add(1, 5, "10")
// add("1", 5, 10)
// add(1, 5, null)
// add(null, 5, 10)
// add(undefined, 5, 10)
// // add(number, 5, 10)

// const result =  add(1,5,15)

// console.log("result :",  result);

// function Checkloggedin(username){
//     if (username === undefined) {
//            console.log("User Name is Not Defined ");
//            return
//     }
//     if (username === "Shashi") {
//            console.log("Namaskar Malik");
//            return
//     }
//     return `${username} is Loggedin`
// }

// console.log(Checkloggedin("Shashi"));

const user = {
  useName: "Shashi Jha",
  age: 29,
};

function handleObject(anyObject) {
  console.log(`User Name is ${anyObject.useName} and age is ${anyObject.age}`);
}

handleObject(user);

const myNewArray = [200, 400, 600, 800];

function returnSecondValue(getArray) {
  return getArray[1];
}
function returnLastValue(getArray) {
  return getArray[getArray.length - 1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnLastValue(myNewArray));
