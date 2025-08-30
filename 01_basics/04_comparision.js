console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason is that an quality check == and comparisons
// ><>=<= work differently , comparisons convert null to
// numb(1)>0is false

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// strick check simply === 
console.log("2" === 2);