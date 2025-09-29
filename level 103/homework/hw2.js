// 2)დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.
function countEvenOdd(arr){
    even=0
    odd=0
    i=0
    while(i<arr.length){
        if(arr[i]%2==0){
            even++
        }else{
            odd++
        }
        i++
    }return 'there are '+even+' even numbers  ' +'and '+odd+ ' odds '
}

console.log(countEvenOdd([21,2,2,421,63,33]))