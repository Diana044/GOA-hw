// shift----
// ფუნქციამ მიიღოს სია. წაშალოს პირველი ელემენტი და დააბრუნოს განახლებული სია.
let list4=['list1','liost2','list2','list4','list5','list6','list7','list8','list9','list10']
list4.shift()
console.log(list4) 
console.log('--------------------------------------------')

// length----
// ფუნქციამ მიიღოს სია და დააბრუნოს ტექსტი: "სიაში არის N ელემენტი".
function lenCanc(arr){
    return `სიაში არის ${arr.length} ელემენტი`
}
let students=['maiko','maiko','guranda','guranda','maiko','guranda']
console.log(lenCanc(students))
// concat----
// ფუნქციამ მიიღოს ორი სია და დააბრუნოს ახალი სია, სადაც გაერთიანებულია ორივე.
console.log('--------------------------------------------')
function concatFunc(arr1, arr2){
    let both=arr1.concat(arr2)
    return `concated list ${both} `
    
}
array1=[33,44,24,'burito']
array2=[44,4.3,'mash']
console.log(concatFunc(array1,array2))
console.log('--------------------------------------------')

// ფუნქციამ მიიღოს ორი სია: სახელების სია და გვარების სია. გააერთიანოს ისინი და დააბრუნოს სრული სია.
function concatFunc2(names, surnames){
    let concatedArr=surnames.concat(names)
    console.log( 'surnames and names:',concatedArr)
}
concatFunc2(['lasha','evriko', 'zauri'] ,['--------Surnames----------','xmaladze','gelashvili','budurasahvili','--------names----------'])



// push + pop----
// ფუნქციამ მიიღოს სია.
// დაამატოს "test" ბოლოში,
// შემდეგ მოაშოროს ბოლო ელემენტი.
// ბოლოს დააბრუნოს მიღებული სია.
function pushPop(array3){
    array3.push('test')
    array3.pop()
    return  array3
}
console.log(pushPop(['medicine','gfgh','text2']))



