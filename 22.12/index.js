//error handling, trycatch
// console.log(number);
// try {
//     // console.log(number);
//     throw new Error('smth went wrong')
// } catch(error) {
//     console.log(error.message);
// }





// callback funksiya


let users = {
    Malika:{
        login :"malika",
        password : 12345,
        fullname: 'Bozorova Malika'
    },
    Malik:{
        login :"malik",
        password :54321,
        fullname: 'Bozorov Malik'
    },
}



 console.log('started...');


// let login = (lg, pw, callback) =>{
//     setTimeout(() => {
//         if (users.Malika.login == lg && users.Malika.password == pw) {
//             return  callback(`${users.Malika.fullname}, welcome to Instagram!`);
//         }else{
//             return  callback(`Foydalanuvchi parol notugri!`)
//         }
//     }, 1000);
//     }
//  login('malika', 12345, (usr)=>{
//    console.log(usr);
//    console.log('finished...');
// })
// console.log(res);


// let login = (lg, pw, callback) =>{
//     setTimeout(() => {
//         if (users.Malika.login == lg && users.Malika.password == pw) {
//             return  callback(`${users.Malika.fullname}, welcome to Instagram!`);
//         }else{
//             return  callback(`Foydalanuvchi parol notugri!`)
//         }
//     }, 1000);
//     }
//  login('malika', 12345, (usr)=>{
//    console.log(usr);
//    console.log('finished...');
// })

//  let m = new Promise((resolve, reject)=>{
//     if (users.Malika.login == 'malika' && users.Malika.password == 12345) {
//         resolve(`${users.Malika.fullname}, welcome to Instagram!`);
//     }else{
//         reject(`Foydalanuvchi parol notugri!`)
//     }
//  })
//  m.then((res)=> console.log(res)).catch((err)=>console.log(err)).finally(()=>{console.log('finished...');})


// async function ==> async function get(){},
// const get = async()=>{}


let m = new Promise((resolve, reject)=>{
    setTimeout(() => {
        
        if (users.Malika.login == 'malika' && users.Malika.password == 12345) {
            resolve(`${users.Malika.fullname}, welcome to Instagram!`);
        }else{
            reject(`Foydalanuvchi parol notugri!`)
        }
    }, 1000);
 })

const get = async()=>{
    let res = await m
    console.log(res);
}
console.log('finished...');
get()










// new Promise
// async funksiya