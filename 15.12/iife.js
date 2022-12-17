// IIFE, 
// var a = 'web';
// // var a ='web';
// function get() {
//    let a = 'academy'
//    console.log(a);
// }
// get() 
// console.log(a);

// (function() {
//     var a = 'hello'
//     // console.log(a);
// })();
// console.log(a);



// NFE,

// let getName = function recursion(who){
//     if (who) {
//         console.log(`hello ${who}`);
//     }else{
//         recursion('guest')
//     }
// }
// getName()



// Global object- window/globalThis/global

// globalThis.a = 10;

// function get() {
//     let a = 30;
//     console.log(a, globalThis.a);
// }
// get()



// get name of function

// function test(a, b,c) {
//     console.log('hello');
// }
// console.log(test.name);
// console.log(test.length);



// New Function(),

// let arr = new Function(`console.log('hey')`)
// arr()


// SetTimeout(), --> clearTimeout(id)

// let id = setTimeout((a)=>{
//  console.log('hello', a);
// }, 3000, 'baby')
// clearTimeout(id) 



// setInterval() --> clearInterval(id)

// let id = setInterval((a)=>{
//     console.log('hello', a);
//    }, 1000, 'baby')
//    clearInterval(id)

