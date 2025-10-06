// 4)შექმენი ფუნქცია რომელიც იღებს სტრინგს(სტრინგის სიგრძე მეტი უნდა იყოს 10 ზე) და რიცხვს,შენი დავალებაა რომ ამ სტრინგიდან გამოიტანო 0 ინდექსიდან იდან ფუნქციის პარამეტრში გადაცემულ რიცხვამდე(ინდექსამდე) მყოფი ასოები, გამოიყენე ნასწავლი ფუნქცია
function func(str, num) {
    if(str.length<10){
        alert('strimgos sigrdze unda iys atze meti!!')
    }
  return str.slice(0, num);
}

console.log(func('anan4ana44nananann', 8))