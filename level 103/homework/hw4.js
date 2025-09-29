// 4)შექმენი ფუქნცია findMin(arr) – მიიღოს სია და დააბრუნოს ყველაზე პატარა რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)

function findMin(arr){
    let smallest=arr[0]
    let i=1
    while(i<arr.length){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
        i++
    }return smallest
}

console.log(findMin([23,4,-1,2]))