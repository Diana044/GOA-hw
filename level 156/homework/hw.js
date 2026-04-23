// 1)შექმენი ერთი ინფუთი,საბმით ღილაკი და ერთ პარაგრაფი

// მომხმარებელი წერს input-ში სახელს და აჭერს ღილაკს.ამის 
// შემდეგ პარაგრაფში უნდა გამჩნდეს მომხმარებლის მიერ შეყვანილი მნიშნველობა

// დავალება:
// შეინახე ეს სახელი localStorage-ში და გვერდის გადატვირთვის შემდეგაც გამოჩნდეს.

const p =document.getElementById('p')
const btn =document.getElementById('btn')
const inp =document.getElementById('input')

 const savedName = localStorage.getItem('userName')
  if (savedName) {
    p.textContent = savedName
  }

btn.addEventListener('click',() =>{
    p.textContent=inp.value
    const  savedName=localStorage.setItem('userName',inp.value)
})


















// 3)გვერდზე გაქვს ქუაუნთერი + -  და reset ღილაკებით

// დავალება:

// ყოველ დაჭერაზე counter იზრდება 1 ით

// მნიშვნელობა ინახება localStorage-ში

// refresh-ზე არ ნულდება

// 4)TODO app --- > input + add button

// დავალება:

// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

// 5)წინა დავალებას დაამატე:

// დავალება:

// თითო task-ს ჰქონდეს delete ღილაკი
// წაშლისას localStorage-იც განახლდეს