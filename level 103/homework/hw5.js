// 5)შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა).
                                            
function average(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let average1 = sum / arr.length;
    return average1;
}

console.log(average([33, 2, 13,43])); 