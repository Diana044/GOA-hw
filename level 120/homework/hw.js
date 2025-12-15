// 1) გააკეტეთ ესეთი პროექტი: ტექსტის ფერის არჩევა, იყოს ფერების ჩამონათვალი დივების სახით, და ერთი ინფუთი, შემდეგ ამ ფერების დაჭერაზე ინფუთის წერის დროს მაგ  ფერის ტექსტი დაიწეროს, გამოიყენეთ event ობიუქტი

let body=document.body
let input = document.getElementById('input')
let mainDiv=document.createElement('div')
let greenDiv=document.createElement('div')
let blueDiv=document.createElement('div')
let redDiv=document.createElement('div')
let pinkDiv=document.createElement('div')

body.style.height='100vh'
body.style.display='flex'
body.style.flexDirection='column'
body.style.justifyContent='center'
body.style.alignItems='center'


mainDiv.style.display='flex'
mainDiv.style.gap='10px'
mainDiv.style.marginTop='40px'

greenDiv.innerHTML='green'
greenDiv.style.backgroundColor='green'
greenDiv.style.padding='20px'


blueDiv.innerHTML='blue'
blueDiv.style.backgroundColor='blue'
blueDiv.style.padding='20px'


redDiv.innerHTML='red'
redDiv.style.backgroundColor='red'
redDiv.style.padding='20px'


pinkDiv.innerHTML='pink'
pinkDiv.style.backgroundColor='pink'
pinkDiv.style.padding='20px'

let color='black'

mainDiv.addEventListener('click',function(e){
    color=e.target.style.backgroundColor
})

form.addEventListener('input', function(){
    input.style.color=color
})









mainDiv.appendChild(greenDiv)
mainDiv.appendChild(blueDiv)
mainDiv.appendChild(redDiv)
mainDiv.appendChild(pinkDiv)

body.appendChild(mainDiv)

