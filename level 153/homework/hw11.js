
// 11)გაქვს:

let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30]
]);

// იპოვე:

// ყველა value-ს საშვალო


let sui=0
map.forEach((value)=>{
    sui+=value

})
console.log(sui/(map.size+1))