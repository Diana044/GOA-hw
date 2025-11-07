// 10)შექმენით ობიექტი რომელიც იქნება ცარიელი,შენი დავალებაა რომ ამ ობიექტშ დაამატო 5 property,
// შემდეგ დააკონსოლლოგეთ(რომ შეამოწმოთ შეივსო(დაემატა)თუ არა ,და ამის შემდეგ ამოშალოთ 2 property (ბოლოს დააკონსოლლოგეთ რომ ნახოთ ამოიშალა თუარა)


console.log('------------------------')

const empty={

}

empty.color='red'
empty.height=190+'cm'
empty.lengthh=565
empty.city='paris'
empty.name='diana'

console.log(empty)

delete empty.city
delete empty.color

console.log(empty)

