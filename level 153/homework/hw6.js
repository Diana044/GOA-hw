// 6)გაქვს:

let map = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8]
]);

// forEach-ით:

// დაბეჭდე მხოლოდ ის ელემენტები, სადაც value > 4

map.forEach((value)=>{
    value>4?console.log(value):''
})