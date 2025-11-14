// 3)შექმენით 5 სათაური,შენი დავალებაა რომ ეს 5 სათაური წამოიღო ჯს ში tagName ის გამოყენებით და შეინახო ცვლადში,შემდეგ შენი დავალებაა რომ innerHTNL ის გამოყენებით შეცვალალო ყველა სათაურის შიგთავსი(ტექსტი) ცალ ცალკე(ინდექსების გამოყენებით რითიც თქვენ გინდათ, ამის შემდეგ როცა შეცვლით 5 ივე ს კონტენტს გამოიტანეთ 5 ივე სათაურის შიგთავსი კონსოლში გამოიყენეთ  innerHTML

let h1Tags=document.getElementsByTagName('h1')

console.log(h1Tags[0].innerHTML)
console.log(h1Tags[1].innerHTML)
console.log(h1Tags[2].innerHTML)
console.log(h1Tags[3].innerHTML)
console.log(h1Tags[4].innerHTML)

h1Tags[0].innerHTML='newtxt1'
h1Tags[1].innerHTML='newtxt2'
h1Tags[2].innerHTML='newtxt3'
h1Tags[3].innerHTML='newtxt4'
h1Tags[4].innerHTML='newtxt5'

console.log('-------------------------------')
console.log(h1Tags[0].innerHTML)
console.log(h1Tags[1].innerHTML)
console.log(h1Tags[2].innerHTML)
console.log(h1Tags[3].innerHTML)
console.log(h1Tags[4].innerHTML)