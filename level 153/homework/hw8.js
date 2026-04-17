
// 8)გაქვს Map

// დაწერე კოდი, რომელიც:

// ამოწმებს თუ Map-ში 3-ზე მეტი ელემენტია → "დიდია"
// წინააღმდეგ შემთხვევაში → "პატარაა"

// გამოიყენეთ ternary

let map = new Map([
  ["apple", 5],
  ["banana", 2],
  ["orange", 8],
  ["banana", 8],
  ["yayacho", 8],

]);

map.size>=3?console.log('big'):console.log('small')