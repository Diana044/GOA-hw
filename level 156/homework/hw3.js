// 3)გვერდზე გაქვს ქუაუნთერი + -  და reset ღილაკებით

// დავალება:

// ყოველ დაჭერაზე counter იზრდება 1 ით

// მნიშვნელობა ინახება localStorage-ში

// refresh-ზე არ ნულდება

const increase =  document.getElementById('increase')
const decrease =  document.getElementById('decrease')
const number =  document.getElementById('number')

let count = Number(localStorage.getItem('currentNumber')) || 0
number.textContent=count


increase.addEventListener('click', ()=>{
    count+=1
    number.textContent=count
    localStorage.setItem('currentNumber',count)
})

decrease.addEventListener('click', ()=>{
    count-=1
    number.textContent=count
    localStorage.setItem('currentNumber', count)
})

reset.addEventListener('click', () => {
  count = 0
  number.textContent = count
  localStorage.setItem('currentNumber', count)
})