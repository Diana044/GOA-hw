// 7)შექმენი 6 ცალი პარაგრაფი,წამოიღე ყველა პარაგრაფი tagName ის გამოყენებით და შეინახე ცვალადში,შემდეგ დააკონსოლლოგე იმ სიის სიგრძე რომელშიც ინახავ ყველა პარაგრაფს////ასევე ამ სიას გადაუარე for ციკლით და გამოიტანე თითოეული ელემენტის textContent ცალ ცალკე

const paragraphs=document.getElementsByTagName('p')
console.log('length of array is',paragraphs.length)

for(let i of paragraphs){
    console.log(i.textContent)
}


// paragraphs[0].innerHTML='<strong>pp1 </strong>'