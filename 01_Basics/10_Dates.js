let MyDate = new Date
let FullYear = new Date().getFullYear()
let Month = new Date().getMonth()
let CurrentDate = new Date().getDate()
let Day = new Date().getDay()
let Hours = new Date().getHours()
let Minutes = new Date().getMinutes()
let Seconds = new Date().getSeconds()
let Milliseconds = new Date().getMilliseconds()
let others = new Date().getTime() 

FullYear
Month
CurrentDate
Day
Hours
Minutes
Seconds
Milliseconds
others
let newDate = MyDate.toLocaleDateString();

console.log(newDate.replace("/" , "-").replace("/", "-"));

console.log(MyDate);
console.log(MyDate.toDateString());
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.toTimeString());
console.log(MyDate.toLocaleTimeString());


let MyNewDate = new Date(2024, 7, 17, 16, 14 , 24 )
console.log(MyNewDate.toDateString());
console.log(MyNewDate.toLocaleTimeString());


let MyOtherDate = new Date("01-16-2024")
console.log(MyOtherDate.toLocaleString());

let myTimestamps = Date.now()

console.log(myTimestamps);
console.log(MyOtherDate.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(MyNewDate.toLocaleString("default", {
    weekday:"long",
    month:"2-digit",
    year:"numeric",
    dayPeriod:"narrow",
    era:"short",
    formatMatcher:"best fit",
    hour:'2-digit',
    hourCycle:"h24",
    minute:'numeric',
    second:"2-digit",
} ));
