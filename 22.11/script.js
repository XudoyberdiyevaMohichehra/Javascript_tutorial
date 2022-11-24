// OBJECT --> KEY va VALUE dan taskil topgan birikma hisoblanib, turli xil murakkab birikmalarni
//  saqlash uchun ishlatiladi.
// syntaksis --> {key : value}

let obj1 = { 0 : 78909876, age : 20, status : 'student'};

for(let key in obj1){
   console.log(obj1[key]);
}










// console.log('0' in obj1);









// let obj2 = obj1;
// obj2.age = 43;
// console.log(obj2 );
// console.log(obj1 );
// obj2 = {};
// Object.assign(obj2, obj1)
// obj2.age = 10000;
// console.log(obj2 );
// console.log(obj1 );
// structuredClone()









// Object.freeze(obj)
// Object.seal(obj)
// obj.age = 30;         //uptade
// obj.name = 'Malika'    // create
// delete obj[0]       //delete
// console.log(obj);


// let key = 'status'

// console.log(obj.key);
// console.log(obj[key]);
// console.log(obj['key']);
// console.log(obj[0]);













// let account = "webbrain";

// console.log(account);

// let newObj1 = {};
// let newObj2 = new Object();

// let name = "webbrain academy";
// let major = "Frontend";

// const ac1 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
//   founded: 2022,
//   students: 1000,
//   mentors: 5,
// };

// for (let i in ac1) {
//   console.log(i);
// }

// const ac2 = ac1;

// ac1.name = "test";

// Object.assign(ac2, ac1);

// console.log(ac2);

// const ac2 = structuredClone(ac1);
// ac1.name = "rteta";
// console.log(ac2);

// const ac2 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };
// const ac3 = ac1;

// ac3.founded = 2022;

// console.log(ac1);
// console.log(ac3);

// account = "ladjflajsdf";
// Object.freeze(account);
// Object.seal(account);
// account.major = 2022;

// delete account.major;

// console.log(account);

// let name = "major";
// console.log(account.name);
// console.log(account[name]);
// console.log(account["name"]);

// let key = "major";

// console.log(account.major);
// console.log(account[key]);
// console.log(account["major"]);

// console.log(account.'full name');
// console.log(account[0]);
// console.log(account["0"]);
// console.log(account["full name"]);

// console.log(account.surname);
// console.log(account["name"]);




// task
// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id