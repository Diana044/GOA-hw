// 2)მომხამრებელს შემოატანინე ორი რიცხვი start და end ი ,შემდეგ დაატიალეთ ფორ ციკლი start იდან end ის ჩათცლით და ამ გაიგე ამ რიცხვების ჯამი,შეინახე ეს ჯამი ცვლადში და შემდეგ გამოთვალეთ საშაუალო არითმეტიკული და გამოიტანეთ კონსოლში
let start = Number(prompt("Enter start number"))
let end = Number(prompt("Enter end number"))
let number=0
let count=0
for(i=start; i<=end; i++){
    number+=i
    count++
}

let average=number/count
console.log(average)

