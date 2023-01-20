
// function getFull() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()
//    );
// }

// function getFull() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()
//    );
// }
// function getCached(func) {
//   let cache = new Map();
//   return function (x) {
//     if(cache.has(x)){
//       return cache.get(x)
//     }
//       let res = func()
//       return cache.set(x, res)
    
//   }
// }
// getFull = getCached(getFull)
// getFull()

let usr = {
  name : 'webbrain',
    getFull() {
    return fetch("https://jsonplaceholder.typicode.com/.${this.name}").then((res) => res.json()
     );
  }
}

function getCached(func) {
  let cache = new Map();
  return function (x) {
    if(cache.has(x)){
      return cache.get(x)
    }
      let res = func.call(this)
      return cache.set(x, res)
  }
}
getFull = getCached(getFull)
// getFull()