// 2)გაქვს:

let map = new Map([
    ["apple", 2],
    ["banana", 3]
]);

// შეამოწმე:

// არის თუ არა "apple"
// არის თუ არა "orange"


// თუ არსებობს → დაწერე "არსებობს"
// თუ არა → "არ არსებობს"


// გამოიყენე ternary
map.has('apple')? console.log("არსებობს"): console.log("არ არსებობს")
map.has('orange')? console.log("არსებობს"): console.log("არ არსებობს")
