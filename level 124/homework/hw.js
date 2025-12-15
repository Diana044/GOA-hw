// დაამატეთ ინფუთი საიდანაც მომხმარებელი შეიყვანს ფერს და როდესაც ღილაკს დააჭერს რაფერიც იქნება შეყვანილი იმფრად შეიღებოს ყველაფერი, ასევე ინფუთს დაამატეთ ვალიდაციები,რომ თუ ისეთ რამეს შემოიყვან რაც არ არის ფერის გამომხატველი  მოუფიქრრთ ვალიდაცია რომ არასწორად შეიყვანა მომხმარებელმა ფერი და თავიდან ცადოს
// create


let body=document.body
let form = document.createElement("form")
let mainDiv=document.createElement('div')
let div=document.createElement('div')
let label=document.getElementById('label')
let inp=document.createElement('input')
let bnt=document.createElement('button')

// atributes
inp.type='text'
inp.id='input'
bnt.type='text'
inp.name='color'

// inner html
bnt.innerHTML='Click me'

// style
body.style.height='100vh'
body.style.backgroundColor='rgb(35, 154, 100)'
body.style.display='flex'
body.style.flexDirection='column'
body.style.alignItems='center'
body.style.justifyContent='center'

mainDiv.style.display='flex'
mainDiv.style.flexDirection='column'
mainDiv.style.alignItems='center'
mainDiv.style.justifyContent='center'
mainDiv.style.gap='50px'


div.style.backgroundColor='rgb(50, 50, 50)'
div.style.padding='6px'
div.style.display='flex'
div.style.alignItems='center'
div.style.justifyContent='center'
div.style.borderRadius='5px'


label.style.fontSize='30px'
label.style.fontWeight='900'
label.style.color='white'


bnt.style.padding='7px'
bnt.style.backgroundColor='rgb(35, 154, 100)'
bnt.style.border='2px solid black'
bnt.style.fontSize='17px'





// appending


div.appendChild(label)
div.appendChild(form)
form.appendChild(inp)
form.appendChild(bnt)


form.addEventListener("submit", function(e){
    e.preventDefault()
    let inpColor = e.target.color.value

    if (inpColor !== ''){
        body.style.backgroundColor = inpColor
        e.target.color.style.border = "1px solid black"
    }else{
        e.target.color.style.border = "1px solid red"



    }
})


mainDiv.appendChild(div)
body.appendChild(mainDiv)