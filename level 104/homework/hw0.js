// 1) კომენტარის სახით ჩამოწერეთ თუ რა სიის ფუნქციები ვისწავლეთ და ახსენით რომელი რას აკეთებს
// ვისწავლეთ:
// push- ამატებს ელემენტს სიის ბოლოში, unshift- ამატებს ელემენტს სიის დაასაწყისში, shift-შლიის სიის პირველ ელემენტს, pop-შლის ეელემენტს სიის ბოლოდან, slice- კონკრეტული ინდექსიდან -ინდექსამდე გამოიტანს ელემენტებს კონსოლში., splice- კონკრეტული ელლემენტის ინდექსიდან გამოიტანს იმდენს ელემენტს რამდენსაც მივუთითებთ,length---იგებსს თუ რამდენი  ელემენტია სიაში concat-აერთებს ორ სიას

// 2)
// push----
// ფუნქციამ მიიღოს სია და ახალი ელემენტი. ახალი ელემენტი დაამატოს სიის ბოლოს და დააბრუნოს განახლებული სია.
let list1=['23','cow','snake',434,55.5, true, false, 'cat','dog']
let newEl='rat'
list1.push(newEl)
console.log(list1)
// experiment
function pushFunc(array,  newElement){
    array.push(newElement)
    return array
}
console.log(pushFunc(['decodeURI',4,'iavnana'], 'gol'))

// ფუნქციამ მიიღოს სია და სტუდენტის სახელი. დაამატოს სტუდენტი სიის ბოლოს და დაბეჭდოს: "სტუდენტი დამატებულია!".
function addingStudent(arr, studentName){
    arr.push(studentName)
    console.log("სტუდენტი სახელად" ,studentNameInput, "დამატებულია!")

}                               
studentList=['givi','sofo','sofia','elene']
let studentNameInput=prompt('enter your name studednt')
console.log(addingStudent(studentList,studentNameInput ))
console.log(studentList)


