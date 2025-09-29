// 3)შექმენი ფუნქცია findMax(arr) – მიიღოს სია და დააბრუნოს უდიდესი რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება''''''''''''''''rom'''''''''''''''' შეასრულოთ)

function findMax(arr){
    let biggest=arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i]>biggest){
            biggest=arr[i]
        }
    }return biggest
}

console.log(findMax([33,43,233,2]))