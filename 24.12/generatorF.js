// lesson 24 // generator function

// function* generatorF() {
  // console.log('hello1');
  // console.log('hello1');
  // console.log('hello1');
  // console.log('hello1');
  // console.log('hello1');
    // yield 1
    // yield 2
    // yield 3
    
// }

// const g1 = generatorF()
//  for(let vl of g1){
//   console.log(vl);
//  }

// console.log([...g1]);




// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// const g2 = generatorF()
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());


// function* gen() {
//   // Pass a question to the outer code and wait for an answer
//   let result = yield "2 + 2 = ?"; // (*)

//   console.log(result);
// }

// let generator = gen();

// let question = generator.next().value; // <-- yield returns the value
// // console.log(question);
// generator.next(4); // --> pass the result into the generato











// yield, return
// function* getData(param) {
//     let i = 0;
//     while (true) {
//       let gn = yield ++i;
//       if (gn) i += gn;
//     }
//   }
  
//   const generator = getData();
  
//   console.log(generator.next());
//   console.log(generator.next(3));
//   console.log(generator.next(4));
  
  // const gr = getData();
  
  // for (vl of generator) {
  //   console.log(vl);
  // }
  
  // console.log([...generator]);
  
  // console.log(generator.next());
  // console.log(generator.next());
  // console.log(gr.next());

  // function* getId() {
  //   let id = users.length;
  //   while (true) {
  //     yield ++id;
  //   }
  // }
  // let generator2 =  getId()
  
  // let users = [
  //   { id: 1, name: "Eshmat1" },
  //   { id: 2, name: "Eshmat2" },
  //   { id: 3, name: "Eshmat3" },
  //   { id: 4, name: "Eshmat4" },
  //   { id: 5, name: "Eshmat5" },
  //   { id: 6, name: "Eshmat6" },
  // ];
  
  // const onDelete = (id) => {
  //   let res = users.filter((vl) => vl.id !== id);
  //   users = res;
  // };
  // const add = (usr) => {
  //   users = [...users, { id: generator2.next().value, name: usr }];
  // };
  // add('Ogabek')
  // console.log(users);



  // const add = (usr) => {
  //   users = [...users, { id: generator2.next().value, name: usr }];
  // };
  
  // add("Gulbashakar1"); // 7
  // onDelete(3);
  // add("Gulbashakar2"); // 7
  // add("Gulbashakar3"); // 8
  // // onDelete(7);
  
  // console.log(users);

  // function* g(param) {
  //   for(vl of param){
  //     let res =  yield vl
  //     console.log(res);
  //   }
  // }
  // let generator = g([1,2,5])
  // console.log(generator.next(7));
  // console.log(generator.next());
  // console.log(generator.next());

  function* generatorFunc() {
    let x = yield 'hello';
    console.log(x);
}
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next(6));








