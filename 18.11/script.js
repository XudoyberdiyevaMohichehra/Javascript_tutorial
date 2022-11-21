// WHILE, DO WHILE+

// while (condition) {
    // body of loop
// }

// let n = 5;
// let i = n; 

// while (i >= 1) {
//     console.log(i);
//     i -= 1;
// }


// do {
    // body of loop
// } while(condition)


// let i = 2;
// const n = 5;

// do {
//     console.log(i);
//     i++;
// } while(i <= n);






// FUNCTION

// function nameOfFunction () {
//     console.log('function');   
// }
// nameOfFunction()

// function calculate(amount) {

//     return amount * 2
// }
// console.log(calculate(3));

// function Ism(lname, fname, name) {

//     console.log('ism-familiyangiz: ' + fname + ' ' + lname + name);
   
// }
// Ism( 'Mohichehra', 'Xudoyberdiyeva', 'Xudoyberdiyeva');
// Ism('Xudoyberdiyev', 'Ogabek');

let power = function(son, daraja) {
    let javob = 1;
    for (let i = 0; i < daraja; i++) {
        javob *= son
    }
    return javob;
}
console.log(power(12, 2));