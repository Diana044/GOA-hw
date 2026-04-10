// 5)გაქვს:

let map = new Map([
  ["x", 10],
  ["y", 20],
  ["z", 30]
]);

// დაბეჭდე მხოლოდ:

// ყველა key (for...of ითაც და forEach() ით )
for(let [key] of map){
    console.log(key)
}

map.forEach((value, key)=>{
    console.log(key)
})
// ზემოთ მოცემული Map იდან:

// დაბეჭდე:

// ყველა value
for(let [key, value] of map){
    console.log(value)
}

map.forEach((value, key)=>{
    console.log(value)
})