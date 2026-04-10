
// 13)გაქვს:

let numbers = [1,2,3,4,5,6,7,8,9];

// შექმენი Map:
// key = "even" / "odd"
// value = შესაბამისი რიცხვების მასივი



let map= new Map()
for(let i of numbers){
    map.set(i,i%2==0?'even':'odd')
}


console.log(map)