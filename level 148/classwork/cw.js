// 1)შექმენი სია სადაც მოთავსებული იქნება ადამიანის სახელები , დაახლოებით 10 სახელი

// თქბენიდ დავალებაა რომ filter მეთოდის დახმარებით შექმნათ ახალი სია სადაც ინქებიან
//  მხოლოდ ის სახელები რომელშიც ასობის რაოდენობა იქნება 5 ზე მეტი და და იწყება g ასოზე

// ეს დავალება შეასრულეთ single line function ითაც და ჩვეულებრივ return keyword ის
//  გამოყენებითაც



const arr = ['diana','ana', 'giorgi', 'levani', 'lasha', 'konstantine', 'goga', 'gocha', 'natali', 'tekla']
const newArr = arr.filter(elements => elements.length > 5 && elements('g'))

console.log(newArr)

const newArr2 = arr.filter(elements => {
    return elements.length > 5 && elements.startsWith('g')
})