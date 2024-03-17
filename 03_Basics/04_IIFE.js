//Immediately Invoked Function Expression (IIFE)

// function project() {
//   console.log("DB Connected");
// }

// project();

//Named IFFE
(function project() {
  console.log("DB Connected");
})();

//Normal IFFE
(() => {
  console.log("DB IS CONNECTED");
})();

//Normal IFFE with parameters
((SERVER) => {
  console.log(`${SERVER} IS CONNECTED`);
})("WINDOWS");

// Note: in IFFE it is mandatory to close the function ";" this symbol else function won't work
