// level 110:
//     1) შექმენით სია რომელშიც იქნება რიცხვები, შემდეგ შექმენით ორი დამატებითი სია, ერთ სიაში ჩაამატეთ მთავარი სიიდან მხოლოდ ლუწი რიცხვები ხოლო მეორეში მხოლოდ კენტები

let numsArr = [3, 432, 543, 55, 6646, 3, 2, 4]

let evenArr = []
let oddArr = []
let i = 0

while (i < numsArr.length) {
    if (numsArr[i] % 2 == 0) {
        evenArr.push(numsArr[i])
    } else {
        oddArr.push(numsArr[i])
    }
    i++
}

console.log( evenArr)
console.log(oddArr)


