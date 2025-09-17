// 5)prompt–ით მომხმარებელს შეეკითხე სამი რიცხვი.
// გამოიყენე if/else რომ იპოვო:
// ყველაზე დიდი რიცხვი
// ყველაზე პატარა რიცხვი
// შემდეგ შეამოწმე:
// თუ ყველაზე დიდი რიცხვი ლუწია → დაბეჭდე "ყველაზე დიდი რიცხვი ლუწია"
// თუ კენტია → "ყველაზე დიდი რიცხვი კენტია"

let biggest=0
let smallest=0

let num1=Number(prompt('number1'))
let num2=Number(prompt('number2'))
let num3=Number(prompt('number3'))

if(num1>=num2 && num1>=num3){
    biggest=num1
}else if(num2>=num1 && num2>=num3){
    biggest=num2
}else{
    biggest=num3
}


if (num1<=num2 && num1<=num3){
    smallest=num1
}else  if (num2<=num1 && num2<=num3){
    smallest=num2
}else{
    smallest=num3
}

alert("ყველაზე დიდი რიცხვი: " + biggest);
alert("ყველაზე პატარა რიცხვი: " + smallest);

if (biggest %2===0){
    alert("ყველაზე დიდი რიცხვი ლუწია")
}else{
    alert("ყველაზე დიდი რიცხვი კენტია")
}