// 2)შექმენი ფუნქცია, რომელიც იღებს არგუმენტად სტუდენტების სახელების სიას და სტუდენტის სახელს და ამ სიას ბოლოში ამატებს სტუდენტის სახელს.
function pushFunc(studentsList){
    let stName=prompt('enter your name student')
    studentsList.push(stName)
    return `the student list is ${studentsList} and There are ${studentsList.length} students totally `
}
list1=['ana','gio','mari','nugzari','murmani','guranda', 'maiko']
console.log(pushFunc(list1))