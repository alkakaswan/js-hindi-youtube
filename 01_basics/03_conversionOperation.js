let score = "33abc"
// let score = null
// let score = undefind
// let score = ture



// const {score} = req.body

console.log(typeof score) ;
console.log(typeof (score)) ;

let valueInNumber = Number(score)
console.log(typeof valueInNumber) ;
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (not an number)
// true => 1; false =>0;

//let isLoggedIn = 1
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0=> false
// "" => false 
// "alka" => true

let SomeNumber = 33
 let stringNumber =  String(SomeNumber)
 console.log(typeof stringNumber);
