// const coading = ["javaScript", "Python", "Ruby", "Java", "c++", "C#"]

// const values = coading.forEach((items)=>{
//     console.log(items);
// })



//Filters
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter((num)=>{
    
//    return num >= 3
// })
// console.log(newNums);

// const newNums2 = []
// myNums.forEach(num =>{
//     if(num > 4){
//         newNums2.push(num)
//     }
// })
// console.log(newNums2);



let books = [
    {
        title: "To Kill a Mockingbird", 
        genre: "Fiction",
        publish: "1960",
        edition: "First Edition"
    },
    {
        title: "1984",
        genre: "Dystopian Fiction",
        publish: "1949",
        edition: "First Edition"
    },
    {
        title: "The Great Gatsby1",
        genre: "Classic Fiction",
        publish: "1925",
        edition: "First Edition"
    },
    {
        title: "The Great Gatsby2",
        genre: "Classic Fiction",
        publish: "1925",
        edition: "First Edition"
    },
    {
        title: "The Great Gatsby3",
        genre: "Classic Fiction",
        publish: "1925",
        edition: "First Edition"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        publish: "1997",
        edition: "First Edition"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Coming-of-age Fiction",
        publish: "1951",
        edition: "First Edition"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publish: "1813",
        edition: "First Edition"
    },
    {
        title: "The Lord of the Rings",
        genre: "High Fantasy",
        publish: "1954",
        edition: "First Edition"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: "1937",
        edition: "First Edition"
    },
    {
        title: "Brave New World",
        genre: "Dystopian Fiction",
        publish: "1932",
        edition: "First Edition"
    },
    {
        title: "Moby-Dick",
        genre: "Adventure Fiction",
        publish: "1851",
        edition: "First Edition"
    }
];

// books.filter(book => book.genre == "Fantasy").forEach(book =>{
//     console.log(book);
// })

const historyBook = books.filter(book => {
    return book.genre === "Fantasy" &&  book.publish >1980})

console.log(historyBook);


const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const MyNewNums = MyNumbers.map(num =>{return num + 10}) 
// console.log(MyNewNums);


// Chaining of multiple methods 
const MyNewNums = MyNumbers
                    .map(num =>{ return num + 10}) 
                    .map(num => num + 1)
                    .filter(num => num >=18)
                    .map(num => num-6)

console.log(MyNewNums);                    