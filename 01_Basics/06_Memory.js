/* 01: Stack Memory  
Used for Premitive Data Types
Provides Copy Of Value stored in Veriables
*/
let a = 5
let b = a
 // ( only provided copy of a  tot the orignal value of a)

b = 10 


/* 02 : Heap Memory 
Used for Refrence Data Types  or Non-Premitive Data Types
Provides Refrence Value of Oraginal Value Stored in Veriables or Object
*/

let obj1 = {
    name:'Shashi Kumar',
    age:28, 
    Occupation :'Front-End Developer'
}

let obj2 = obj1

obj2.name = "Shashi Kumar Jha"

obj1

let arr1 = [ 1, 2, 3, 4, 5]

let arr2 = arr1 

arr2[0] = 15
arr1