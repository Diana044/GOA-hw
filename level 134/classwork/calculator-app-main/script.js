let body=document.body
let numbersContainer=document.querySelector('.numbers')
let numbersDivs = numbersContainer.querySelectorAll('.num');
let themes=document.querySelector('.themes')
let themesText=themes.querySelectorAll('.themesText')



let input=document.getElementById('input')
let numbersArr=document.getElementsByClassName('num')
let deleting=document.getElementById('delete')
let addition=document.getElementById('addition')
let substraction=document.getElementById('substraction')
let multiplication=document.getElementById('multiplication')
let division=document.getElementById('division')
let dot=document.getElementById('dot')
let reset=document.getElementById('reset')
let equal=document.getElementById('equal')

// theme changing
let themeChangerDiv=document.getElementById('themeChangerDiv')
let themeChangerBtn=document.getElementById('themeChangerBtn')


let operators=['+','-','*','/','.']

function update() {
    input.innerHTML = number
}


let number=''

for(let i =0; i<numbersArr.length;i++){
    numbersArr[i].addEventListener('click',function(){      
        number+=numbersArr[i].textContent
        update()
        console.log(number)
    })
}



addition.addEventListener('click',function(){
    let lastChar=number[number.length-1]
    if(operators.includes(lastChar)){
        return
    }
    number+=addition.textContent
    update()
})

substraction.addEventListener('click',function(){
    let lastChar=number[number.length-1]
    if(operators.includes(lastChar)){
        return
    }
    number+=substraction.textContent
    update()
})

multiplication.addEventListener('click',function(){
    let lastChar=number[number.length-1]
    if(operators.includes(lastChar)){
        return
    }
    number+='*'
    update()
})

dot.addEventListener('click',function(){
    let lastChar=number[number.length-1]
    if(operators.includes(lastChar) ||  '.'.includes(number)){
        return
    }

    number+=dot.textContent
    update()
})
division.addEventListener('click',function(){
    let lastChar=number[number.length-1]
    if(operators.includes(lastChar)){
        return
    }
    number+=division.textContent
    update()
})



deleting.addEventListener('click', function () {
    let text = number.toString()
    number = text.slice(0, text.length-1)
    update()
})

reset.addEventListener('click',function(){
    number=''
    update()
})

equal.addEventListener('click',  function(){
    number=eval(number).toString()
    update()
})








// theme changin
let defaultPosition=1
themeChangerBtn.addEventListener('click',function(){
    defaultPosition++

    if(defaultPosition==1){
        themeChangerDiv.style.justifyContent='start'
        position1()

    }
    else if(defaultPosition==2){
        themeChangerDiv.style.justifyContent='center'
        position2()
      
    }
    else if(defaultPosition==3){
        themeChangerDiv.style.justifyContent='end'
        defaultPosition=0
        position3()
    }
})




function position1(){
    body.style.backgroundColor='rgb(59, 70, 100'
    input.style.backgroundColor='rgb(24, 31, 50)'
    input.style.color='rgb(255, 255, 255)'
    for (let text of themesText) {
        text.style.color = 'rgb(255, 255, 255)'
    }
    themeChangerDiv.style.backgroundColor='rgb(37, 44, 70)'
    themeChangerBtn.style.backgroundColor='rgb(250, 107, 91)'
    numbersContainer.style.backgroundColor='rgb(37, 45, 68)'
        
    for (let div of numbersDivs) {
        div.style.backgroundColor = 'rgb(234, 227, 219)'
        div.style.color = 'rgb(66, 74, 88)'
        div.style.borderBottomColor = 'rgb(178, 162, 150)'


    }

    
    
   

    addition.style.backgroundColor='rgb(234, 227, 219)'
    addition.style.color = 'rgb(68, 75, 94)'
    addition.style.borderBottomColor = 'rgb(181, 164, 153)'

    deleting.style.backgroundColor='rgb(162, 179, 225)'
    deleting.style.color = 'rgb(255, 255, 255)'
    deleting.style.borderBottomColor = 'rgb(66, 78, 115)'

    multiplication.style.backgroundColor='rgb(234, 227, 219)'
    multiplication.style.color = 'rgb(255, 229, 59)'
    multiplication.style.borderBottomColor = 'rgb(181, 164, 153)'

    dot.style.backgroundColor='rgb(234, 227, 219)'
    dot.style.color =  'rgb(68, 75, 94)'
    dot.style.borderBottomColor = 'rgb(181, 164, 153)'

    substraction.style.backgroundColor='rgb(234, 227, 219)'
    substraction.style.color = 'rgb(68, 75, 94)'
    substraction.style.borderBottomColor = 'rgb(181, 164, 153)'

    division.style.backgroundColor='rgb(234, 227, 219)'
    division.style.color =  'rgb(68, 75, 94)'
    division.style.borderBottomColor = 'rgb(181, 164, 153)'

    reset.style.backgroundColor='rgb(162, 179, 225)'
    reset.style.borderBottomColor='rgb(66, 78, 115)'
    reset.style.color='rgb(255, 255, 255)'

    equal.style.backgroundColor='rgb(255, 138, 56)'
    equal.style.borderBottomColor='rgb(146, 37, 25)'
    equal.style.color='rgb(255, 255, 255)'


}


function position2(){
    body.style.backgroundColor='rgb(230, 230, 230)'
    input.style.backgroundColor='rgb(238, 238, 238)'
    input.style.color='rgb(54, 54, 46)'
    for (let text of themesText) {
        text.style.color = 'rgb(50, 51, 44)'
    }
    themeChangerDiv.style.backgroundColor='rgb(211, 205, 205)'
    themeChangerBtn.style.backgroundColor='#f4903c'
    numbersContainer.style.backgroundColor='rgb(211, 205, 205)'
        
    for (let div of numbersDivs) {
        div.style.backgroundColor = 'rgb(229, 228, 224)'
        div.style.borderBottomColor='rgb(165, 158, 144)'
    }

    deleting.style.backgroundColor='rgb(98, 181, 189)'
    reset.style.backgroundColor='rgb(99, 180, 191)'
    equal.style.backgroundColor='rgb(255, 138, 56)'
}


function position3(){
    body.style.backgroundColor='rgb(23, 6, 42'
    input.style.backgroundColor='rgb(30, 8, 54)'
    input.style.color='rgb(255, 229, 59)'
    for (let text of themesText) {
        text.style.color = 'rgb(255, 229, 59)'
    }
    themeChangerDiv.style.backgroundColor='rgb(30, 8, 54)'
    themeChangerBtn.style.backgroundColor='rgb(151, 255, 251)'
    numbersContainer.style.backgroundColor='rgb(30, 8, 54)'
        
    for (let div of numbersDivs) {
        div.style.backgroundColor = 'rgb(51, 27, 77)'
        div.style.color = 'rgb(255, 229, 59)'
        div.style.borderBottomColor = 'rgb(133, 29, 157)'
        

    }

    addition.style.backgroundColor='rgb(51, 27, 77)'
    addition.style.color = 'rgb(255, 229, 59)'
    addition.style.borderBottomColor = 'rgb(133, 29, 157)'

    deleting.style.backgroundColor='rgb(134, 49, 176)'
    deleting.style.color = 'rgb(255, 229, 59)'
    deleting.style.borderBottomColor = 'rgb(133, 29, 157)'

    multiplication.style.backgroundColor='rgb(51, 27, 77)'
    multiplication.style.color = 'rgb(255, 229, 59)'
    multiplication.style.borderBottomColor = 'rgb(133, 29, 157)'

    dot.style.backgroundColor='rgb(51, 27, 77)'
    dot.style.color = 'rgb(255, 229, 59)'
    dot.style.borderBottomColor = 'rgb(133, 29, 157)'

    substraction.style.backgroundColor='rgb(51, 27, 77)'
    substraction.style.color = 'rgb(255, 229, 59)'
    substraction.style.borderBottomColor = 'rgb(133, 29, 157)'

    division.style.backgroundColor='rgb(51, 27, 77)'
    division.style.color = 'rgb(255, 229, 59)'
    division.style.borderBottomColor = 'rgb(133, 29, 157)'

    reset.style.backgroundColor='rgb(134, 49, 176)'
    reset.style.borderBottomColor='rgb(191, 21, 244)'
    equal.style.backgroundColor='rgb(148, 255, 249)'
    equal.style.borderBottomColor='rgb(55, 108, 128)'

}