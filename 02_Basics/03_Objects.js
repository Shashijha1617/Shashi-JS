//Singalton
// Object.create 


//Object literals 

const myKey = Symbol("key1")

const jsUsers = {
    name : "shashi",
    "full Name" :'Shashi Kumar Jha',
    [myKey]:'myKey1',
    age: 28,
    email:'shashi,jha1617@gmail.com',
    address:'Delhi',
    isLogin : false,
    lastLoginDays: ["Sunday", "Monday"]    
}

console.log(jsUsers.email);
console.log(jsUsers["email"]);
console.log(jsUsers["full Name"]);

jsUsers.email = "Shash.jha@kasperinfotech.org"
console.log(jsUsers);

Object.freeze(jsUsers)
jsUsers.email = "Shashi.jha#microsoft.com"
console.log(jsUsers);

const jsUsers2 = {
    name : "shashi",
    "full Name" :'Shashi Kumar Jha',
    [myKey]:'myKey1',
    age: 28,
    email:'shashi,jha1617@gmail.com',
    address:'Delhi',
    isLogin : false,
    lastLoginDays: ["Sunday", "Monday"]    
}

jsUsers2.greeting = function (){
    console.log("Hello JsUsr2");
}
jsUsers2.greeting2 = function (){
    console.log(`Hello JsUsr2 ${this.name}`);
}
jsUsers2





// console.log(jsUsers2.greeting);
console.log(jsUsers2.greeting());
console.log(jsUsers2.greeting2());