// curry function

// function getData(a) {
//     return (b)=>{
//         return (c) =>{
//             return a + b + c
//         }
//     }
// }
// console.log(getData(3)(2)(2));

// const getData = (a) => (b)=>(c)=> a + b + c;

// console.log(getData(3)(2)(2));



// checking methods before execution

// function getData(a) {
//     if(a > 4){
//         return (b)=>{
//             return (c) =>{
//                 return a + b + c
//             }
//         }
//     }
// }
// console.log(getData(3)(2)(2));



// easy complexity
// function check(j, k, i) {
//      console.log(j*k*i);
// }


// function getData(a) {
//         if(a > 2){
//             return (b)=>{
//                 return (c) =>{
//                     return check(a , b , c)
//                 }
//             }
//         }
//     }
//     getData(3)(2)(2);

function operations(type) {
    return (a)=>(b)=>(c)=>{
        switch (type) {
            case 'add': return a + b + c; break;
            case 'minus': return a - b - c; break;
            case 'multiply': return a * b * c; break;
            case 'divide': return a / b / c; break;
        }
    }
}
let math = operations('multiply') 
 console.log(math(6)(4)(2))




