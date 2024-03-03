//sayMyName()


function add(num1, num2 , num3){
    console.log(num1 + num2 + num3);
}

add(1, 5, 10)
add(1, 5, "10")
add(1, "5", 10)
add("1", 5, 10)
add(1, 5, null)
add(null, 5, 10)
add(undefined, 5, 10)
// add(number, 5, 10) 

const result =  add(1,5,15)

console.log("result :",  result);