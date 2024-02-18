//Strings

let Name  = "Shashi Kumar"
let age = 30;
let Projects = 20

console.log("My name is " + Name + ", I am " + age + " year Old and I Have Created " + Projects + " Projects" );
console.log(`My name is  ${Name} , I am ${age} year Old and I Have Created ${Projects} Projects`);

let MyName = new String("Shashi Kumar Jha")
let regex = /[A-Z]/g;
console.log(MyName);
console.log(MyName.charAt(5));
console.log(MyName.charCodeAt(5));
console.log(MyName.codePointAt(4));
console.log(MyName.concat(" Front-end Developer"));
console.log(MyName.endsWith("a"));
console.log(MyName.startsWith("s"));
console.log(MyName.includes("Kumar"));
console.log(MyName.indexOf("J"));
console.log(MyName.length);
console.log(MyName.repeat(2));
console.log(MyName.replace("Shashi" , "Shailesh"));
console.log(MyName.search("Kumar"));
console.log(MyName.slice(7));
console.log(MyName.split(" "));
console.log(MyName.match(regex));
console.log(MyName.normalize());
console.log(MyName.padEnd(30, "."));
console.log(MyName.padStart(30, "."));
console.log(MyName.substring(7,12));
console.log(MyName.toLocaleLowerCase());
console.log(MyName.toLocaleUpperCase());
console.log(MyName.trim("")); // replaces all space fro start and end 
const name1 = '\u0053\u0048\u0041\u0053\u0048\u0049';
console.log(name1);
