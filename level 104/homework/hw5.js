// ყველა ერთად----
// ფუნქციამ მიიღოს სია.
// დასაწყისში ჩასვას "A"
// ბოლოში ჩასვას "Z"
// წაშალოს პირველი ელემენტი
// წაშალოს ბოლო ელემენტი
// სხვა მეორე სიასთან გააერთიანოს(შექმენით თქვენით ახალი სია)
// დაბეჭდოს: "საბოლოო სიის სიგრძე არის: ... და საბოლოო სიაა ..."



function func(array, newlist){
    array.unshift('A')
    array.push('Z')
    array.shift()
    array.pop()
    let both=array.concat(newlist)
    return `საბოლოო სიის სიგრძე არის: ${both.length} და საბოლოო სიაა ${both}`
     
}
colors=['red', 'blue', 'green', ]
shapes=['square','circle','round']
console.log(func(colors, shapes))
