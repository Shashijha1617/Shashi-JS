const user = {
  userName: "Shashi Kumar",
  fees: 1000,
  welcomeMassage: function () {
    console.log(`Welcome Back ${this.userName}`);
    console.log(this);
  },

  goodbymsg: () => {
    console.log(`Goodbye ${this.userName}`);
    console.log(this);
  },
};

// user.welcomeMassage();
user.useName = "Kirtika";
user.welcomeMassage();
user.goodbymsg();

function project() {
  let userName = "Shashi";
  console.log(this.userName);
}
const projectArrow = () => {
  let userName = "Shashi";
  console.log(this.userName);
};

project();
projectArrow();

// Way to create array function
//First MultiLine
const addTwo = (num1, num2) => {
  return num1 + num2;
};
//Second for SingleLine
const addThree = (num1, num2, num3) => num1 + num2 + num3;

console.log(addTwo(5, 4));
console.log(addThree(5, 4, 6));
