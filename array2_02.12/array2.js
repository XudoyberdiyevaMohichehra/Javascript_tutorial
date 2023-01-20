// let obj = [
//     {id : 1, name : "Xudoyberdiyeva Mohichehra", year: 2002},
//     {id : 2, name : "Yoqubov Azizbek", year: 2002},
//     {id : 3, name : "Mohichehrd", year: 2003},
//     {id : 4, name : "xonyor", year: 2005},
//     {id : 5, name : "Mohiniso", year: 2007},
//     {id : 6, name : "Ogabek", year: 2004}
// ]
// function sortByYear() {
//     let res = obj.sort((a,b)=> a.year-b.year)
//     obj = res
// }
// sortByYear()
// console.log(obj);



// let res = obj.filter((value)=> value.name.includes('ov') )
// console.log(res);
// let res = obj.filter((value)=> value.year !== 2002 )
// let res = obj.filter((value)=> value.id <= 2 )
// let res = obj.sort((a,b)=> a.name.localeCompare(b.name) )
// let res = obj.sort((a,b)=> b.year - a.year )
// console.log(res);


// let arr = [1,22,3,5,76,43,]
// let arr2 = ['Kiwi', 'avakado', 'Apple', 'banan']
// arr.sort((a,b)=>a-b)
// arr2.sort()
// arr2.sort((a,b)=>a.localeCompare(b))
// console.log(arr2);

// let arr = [1,22,3,5,'76',43,]

// let res = arr.every((value) => !isNaN(value))
// console.log(res);


// function getFactorial(num) {
//     let res = 0;
//     for (let i = 0; i < num.length; i++) {
//        res = res * num
//     }
//     return res
// }
// console.log(getFactorial(7));

// function getNumber(a = 0, b = 1) { 
//     console.log(a + b); 
// } 
//     console.log(getNumber(3));
// function getNumber(a = 0, b = 1) {
//     return b;
//     }
//     console.log(getNumber(3) * 3);

// var x;
// if (!x) {
// console.log(x ? 'webbrain' : 'academy');
// } if (x) {
// console.log(!x ? 'IT' : 'academy')
// }

// console.log(`${2}+${2}` * 3)

// const obj = {
//     name: 'WebBrian',
//     surname: 'Academy',
//     status: 'IT',
//     };
//     const status = 'name'
//     console.log(obj.status);
// let obj = ['weendkjd', 'ppendkjd']

// for (let i of obj) {
//     console.log(i);
// }    

// const obj = {
//     name: 'WebBrian',
//     surname: 'Academy',
//     status: 'IT',
//     };
//     Object.values(obj).map(([value, key], index) => {
//     console.log(value, key, index);
//     });
//     Object.entries(obj).map(([key, value], index) => {
//         console.log(value);
// });

// console.log(Object.values(obj));