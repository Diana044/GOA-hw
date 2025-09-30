// concat + length----
// ფუნქციამ მიიღოს ორი სია. გააერთიანოს და დაბეჭდოს გაერთიანებული სიის სიგრძე.

function concatLen(arr1, arr2){
    let both = arr1.concat(arr2)
    return `გაერთიანებული სიის სიგრძე: ${both.length}`
}

console.log(concatLen(['apple','melon','strawberry'], [22,323,44,55.6]))

