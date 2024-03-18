// for each

const coading = ["javaScript", "Python", "Ruby", "Java", "c++", "C#"]


//Using For Each
coading.forEach(e =>{
    console.log(e);
})

//Using For Map
coading.map(e =>{
    console.log(e);
})


//Using For for each with saperate function
function printMe(item){
    console.log(item);
}

coading.forEach(printMe)

const myCoading = [
    {
        languageName :'javaScript',
        languageFileName:'js'
    },
    {
        languageName :'Python',
        languageFileName:'py'
    },
    {
        languageName :'Ruby',
        languageFileName:'rb'
    },
    {
        languageName :'Swift',
        languageFileName:'Swift'
    },
    {
        languageName :'Php',
        languageFileName:'Php'
    },
]

myCoading.forEach(item =>{
    console.log(item.languageFileName);
})

