
// 9)გაქვს:

let map = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8]
]);

// შექმენი ახალი Map, სადაც:

// დარჩება მხოლოდ ის მნიშვნელობათა წყვილი რომლის value > 4

// გამოიყენე:forEach
let newMap =new Map()
map.forEach((value,key)=>{
    value>4?newMap.set(key,value):''
})

console.log(newMap)