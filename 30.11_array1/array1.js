// ARRAY 
// {key : value} 
// let arr = [12, "mmm", {name : "kamol"}, function getF(){}]
// console.log(arr);

// create array:

// let arr1 = [4, 5];
// let arr2 = new Array(4, 5)
// console.log(arr1);

// at() and index
// let arr = [12, "mmm", {name : "kamol"}, function getF(){}]

// console.log(arr[1]);
// console.log(arr.at(-1));

// assign new value
// let arr = [1,2,3,4]
// arr[0] = 22;
// console.log(arr);

// multidimensional array| nested array

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   console.log( matrix[1][1] ); // 5, the central element

// Convert to string

// let arr = ["web", "brain"]
// console.log(arr.join(""));

// console.log([1, 2] + [3]); //str
// console.log("1, 2" + "3");


// Array.isArray
// let arr = [1, 2]
// let obj = {}
// console.log(typeof obj);
// console.log(Array.isArray(obj));

// compare
// console.log([] == 0 ); true
// console.log([] == "0" ); false
// console.log(Boolean("0"));
// console.log("" == 0);
// console.log("" === "0");

// for (let i = 0; i < array.length; i++) {
    //     console.log(i);
    
    // }
    
    // for (const value of array) {
        //     console.log(value);
        // }
        
    
        // let array = ["a", 'b', 'c']

//     for (const value in array) {
//           console.log(array[value]);
//    }

// pop()- remove last element
//  push()-- add new element
// shift() -- remove first element
// unshift()-- add new element

        let array = ["a", 'b', 'c']
        array.pop()
        // array.push('f', 'h')
        // array.unshift('0')
        console.log(array);


//  splice()       
//  slice()       
        // let array = ["a", 'b', 'c']
        
        // console.log(array.splice(1, 2, 'yangi malumot kiritildi'))
        // console.log(array);
       
        // console.log(array.slice(0, 2));



//  indexOf()   == boshidan boshlab valuening index positsiyasini aniqlab beradi.
//  lastIndexOf()== oxiridan boshlab valuening index positsiyasini aniqlab beradi.

        // let array = ["a", 'b', 'c', 'k','b', 'd']
        // console.log(array.lastIndexOf('b'));


// concat() birlashtirish uchun ishlatiladi

// let array1 = ["a", 'b', 'c', 'k','b', 'd']
// let array2 = [1022]
// console.log(array1.concat(array2));

// includes() biror bir valueni bor yoki yuqligini aniqlab beradi.

// let array1 = ["a", 'b', 'c', 'k','b', 'd']

// console.log(array1.includes('p'));


// reverse() - valuelarni teskari holatda chiqarish uchun ishlatiladi.
// let array1 = ["a", 'b', 'c', 'k','b', 'd']

// console.log(array1.reverse());


























// let str = "hello world";
//  arr =  str.split("").reverse().join("");
//  arr.reverse()
//  str1 = arr.join()
//  console.log(arr);

//  function makeReverse(str) {
//     return str.split("").reverse().join("");
//  }
//  console.log(makeReverse("hello world"));
// const makeReverse = (str) => str.split("").reverse().join("");
//  console.log(makeReverse("hello world mohichehra"));
// function solution(str) {
    // res = "";
    // for (let i = str.length -1; i >= 0; i--) {
    //     res += str[i]
    // }
    // return res
// }
// console.log(solution("hello world mohichehra"));

// function numberToString(num) {
    // Return a string of the number here!
//     return num.toString()
//   }
//   console.log(numberToString(55));
// let ar = [12, 3, 4, "hey", true, function () {}, null, undefined];

// console.log(ar[0]);
// console.log(ar.at(-2));

// let ar = new Array(5, 1); // array length

// console.log(ar[100]);
// console.log(ar);

// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7];

// console.log(ar1.toString() + ar2.toString());
// console.log(ar1.join(" / "));

// console.log(typeof {});
// console.log(Array.isArray(0));

// let ar = [];

// console.log(ar == 0);
// console.log(ar == "0");

// let user = ["Abdulloh", "Muhammad", "Sardorbek", "Shohruh"];

// for (let i = 0; i < user.length; i++) {
//   console.log(user[i].toUpperCase());
// }

// console.log(user[0].toUpperCase());

// for (i of user) {
//   console.log(i.toUpperCase());
// }

// let ar = [1, 2, 3];

// ar.pop();
// ar.push(4);

// console.log(ar[1]);

// ar.unshift(0);
// ar.shift();

// console.log(ar[1]);

// let ar = [1, 2, 3, 4, 5];
// console.log(ar.slice(1, 3));
// console.log(ar);

// let ar = [1, 2, 3, 4, 5]; // insertion, remove

// console.log(ar.splice(2, 1, "Najmiddin tushundingizmi?"));
// console.log(ar);

// let ar1 = [1, 2, 3];
// let ar2 = [4, 5, 6];
// console.log(ar1.concat(ar2, ar1));

// console.log(ar1.indexOf(1, 3));
// console.log(ar1.lastIndexOf(1, 3));

// let str = "1,23,3,4";

// console.log(str.split(","));

// console.log(ar1.join("").split(","));

// geCacl(ar){

// }

// let ar1 = [1, 2, 3, 4];
// let ar2 = ["webbrain", "academy"];
// res = {
//   w: 1,
//   e: 2,
//   b: 2,
//   r: 1,
//   n: 1,
//   c: 1,
//   a: 3,
//   d: 1,
//   m: 1,
// };

// // ar1.reverse();
// console.log(ar1.includes(11));

