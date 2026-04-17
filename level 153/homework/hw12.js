

// 12)გაქვს:

let word = "javascript";

function countChar(element,char){
    let count=0
    for(let i of element){
        if(i===char){
            count++
        }
    }
    return count
}


let newMap= new Map()
for(let i of word){
    newMap.set(i,countChar(word, i))
}
// შექმენი Map, სადაც:

// key = ასო
// value = რამდენჯერ გვხვდება
console.log(newMap)