const marvelHeros = ["Spiderman", "IronMan", "Hulk", "Thor"]
const dcHeros = ["Superman", "Wonder Women", "Flash" , "Batman"]

// marvelHeros.push(dcHeros)

const allNewHeros = [...marvelHeros, ...dcHeros]
allNewHeros

const newArray = [1,2,[3,4],5,6,[7,8,[9,10,[11,12]]]]

const flatArray  = newArray.flat(Infinity)
flatArray

console.log(Array.isArray("Shashi"));
console.log(Array.from("Shashi"));
console.log(Array.from({name:'Shashi'}));  //important

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));