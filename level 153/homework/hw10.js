// 10)გაქვს:

let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

// გაზარდე ყველა value +10

// გამოიყენე:

// forEach

map.forEach((value,key)=>{
    map.set(key,value+10)
})
console.log(map)