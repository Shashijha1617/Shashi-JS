//Reduce

const array1 = [1, 2, 3, 5, 8]

const sumWithinitial =  array1.reduce((ac, cv)=> {
    console.log(ac);
    console.log(cv);
    return ac + cv 
}, 0)

console.log(sumWithinitial);


const shoppingCart = [
    {
        itemName:'Shoes',
        itemQty:2,
        itemPrice :800
    },
    {
        itemName:'Shirt',
        itemQty:3,
        itemPrice :600
    },
    {
        itemName:'Jeans',
        itemQty:2,
        itemPrice :1600
    },
    {
        itemName:'Watch',
        itemQty:1,
        itemPrice :1500
    },
]

const shoppingCheckoutPrice = shoppingCart.reduce((ac, cv)=> ac + cv.itemPrice, 0 )
const shoppingCheckoutQty = shoppingCart.reduce((ac, cv)=> ac + cv.itemQty, 0 )
console.log(`Total Qty ${shoppingCheckoutQty} of Total Value  : ${shoppingCheckoutPrice}`);