// unshift + shift----
// ფუნქციამ მიიღოს სია.
// დასაწყისში ჩასვას "hello",
// შემდეგ წაშალოს პირველი ელემენტი.
// დააბრუნოს მიღებული სია.

function deleting(array){
    array.unshift('hello')
    array.shift()
    console.log('final list:',array)
}
deleting(['hi','goodbye','shift','unshift'])


