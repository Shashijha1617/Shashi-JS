const tinderUser = new Object()

tinderUser

tinderUser.Id = "123456"
tinderUser.name ="shashi"
tinderUser.email ="shashi.jha1617@gmail.com"

tinderUser


const regularUser = {
    email:'rohit@gmail.com',
    fullName:{
        userFullName:{firstName:'Rohit', lastName:'Verma'}
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

const obj3 = {obj1, obj2}
const obj4 = {...obj1, ...obj2}

obj3
obj4

const obj5 = Object.assign(obj1, obj2)
obj5

const obj6 = Object.assign({}, obj1, obj2)
obj6


const users = [
    {
        name:'Shashi',
        emeil:'Shashi@gmail.com'
    },
    {
        name:'Rohit',
        emeil:'Rohit@gmail.com'
    },
    {
        name:'Vishal',
        emeil:'Vishal@gmail.com'
    },
    {
        name:'Nitesh',
        emeil:'Nitesh@gmail.com'
    },
]

console.log(users[3].emeil);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("Id"));




// {1: 'a', 2: 'b'}1: "a"2: "b"[[Prototype]]: Objectconstructor: ƒ Object()assign: ƒ assign()create: ƒ create()defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()fromEntries: ƒ fromEntries()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()groupBy: ƒ groupBy()hasOwn: ƒ hasOwn()is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}seal: ƒ seal()setPrototypeOf: ƒ setPrototypeOf()values: ƒ values()arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()