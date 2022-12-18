// let user = {
//     name: "Webbrain",
//     lastname: "Academy",
//     title: "IT Center",
//   };
//   let user2 = {
//     name: "Digital",
//     lastname: "One",
//     title: "IT Center",
//   };
  
  let users = [
    {
      name: "Webbrain",
      lastname: "Academy",
      title: "IT Center",
    },
    {
      name: "Digital",
      lastname: "One",
      title: "IT Center",
    },
  ];

  
function getFull() {
   
    console.log(`${this.name} ${this.lastname}`);
  }

//   getFull.call(user, 'hey' );
//   getFull.apply(user, ['hello', 'loop']);
//   getFull.bind(user, "hey")();
// md()
  
  for (let usr of users) {
    // getFull.call(usr);
    // getFull.apply(usr);
    getFull.bind(usr)();
  }
  
  // getFull.call({ name: "webbrain", lastname: "Academy" });
  // user2.getFull();