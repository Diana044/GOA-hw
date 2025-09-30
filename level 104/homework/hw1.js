// pop----
// ფუნქციამ მიიღოს სია. სიის ბოლო ელემენტი წაშალოს და დააბრუნოს წაშლილი ელემენტი.
let list2=['array','55','david','uzmymw','aezakmi','ok']
console.log('წაშლილი ელემენტი სიის ბოლოდაან:',list2.pop())
console.log('--------------------------------------------')


// ფუნქციამ მიიღოს სია (მაგ. პროდუქტების). ამოიღოს ბოლო პროდუქტი და დაბეჭდოს: "გაყიდული პროდუქტი იყო: ..."
function sellingProducts(productsArr){
   return "გაყიდული პროდუქტი იყო: ..." +productsArr.pop()
    
}
console.log(sellingProducts(['apple','banana','beans','potato']))


console.log('--------------------------------------------')


// unshift----
// ფუნქციამ მიიღოს სია და ახალი ელემენტი. ახალი ელემენტი დაამატოს სიის დასაწყისში და დააბრუნოს განახლებული სია.

let list3=['phone','iphone','samsung','google','pixel','redmi']
let newElement='nokia'
list3.unshift(newElement)
console.log('list with new  element:',list3, 'new elment:', newElement)

console.log('--------------------------------------------')

// ფუნქციამ მიიღოს სია და ქალაქის სახელი. დაამატოს ეს ქალაქი სიის დასაწყისში და დააბრუნოს სია.
function unshiftFunc(cityArr,  userCity){
    cityArr=['batumi','tbilisi','qutaisi','qobuleti']
    userCity=prompt('enter new city ')
    cityArr.unshift(userCity)
    return 'newlist: '+ cityArr+ ' added city is: '+ userCity


}

console.log(unshiftFunc())

