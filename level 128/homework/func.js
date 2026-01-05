let body=Document.body

let clock=document.getElementById('clock')
let watch=document.getElementById('watch-img')

let heartRatediv=document.getElementById('heartRate-div')
let timeButton=document.getElementById('changing-time')
let heartRateButton=document.getElementById('changing-heartRate')

let heartRateRandom=document.getElementById('random-heartRate')

let red=document.getElementById('red')
let blue=document.getElementById('blue')
let black=document.getElementById('black')
let purple=document.getElementById('purple')
let pink=document.getElementById('pink')

let buyButton=document.getElementById('buy-button')
let message= document.getElementById('message')


let messageDiv=document.getElementById('message')

let exit=document.getElementById('exit')
let blurDiv=document.getElementById('blurDiv')
let loginWindow=document.getElementById('login-window')
let loginDiv=document.getElementById('login-window-div')
let loginImg=document.getElementById('login-img')
let form=document.getElementById('form')

let user=document.getElementById('user')
let submit=document.getElementById('submit')

let nameSpan=document.getElementById('nameSpan')
let passSpan=document.getElementById('passSpan')


function currentTime(){
    let time=new Date()
    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()
    
    if (hours<10){
        hours=`0${hours}`
    }
    if (minutes<10){
        minutes=`0${minutes}`
    }
    if (seconds<10){
        seconds=`0${seconds}`
    }
    clock.innerHTML=`${hours}:${minutes}:${seconds}`

}

setInterval(currentTime, 1000)




timeButton.addEventListener('click',function(){
    clock.style.display='block'
    heartRatediv.style.display='none'
})

heartRateButton.addEventListener('click',function(){
    clock.style.display='none'
    heartRatediv.style.display='block'
})

function heartBeatChanger(){
    heartRateRandom.textContent=Math.floor(Math.random()*110)+6
}
heartBeatChanger()
setInterval(heartBeatChanger, 20000)




buyButton.addEventListener('click', function(){
    message.style.display='flex'
    blurDiv.style.display='flex'
    
})
message.addEventListener('click',function(){
    message.style.display='none'
    blurDiv.style.display='none'
})


let  colors=document.getElementsByClassName('color')
for(let element of  colors){
    element.addEventListener('click',function(){
        watch.src= `imgs/${element.id}.png `

    })
}



loginImg.addEventListener('click',function(){
    blurDiv.style.display='flex'
    loginDiv.style.display='flex'
})


exit.addEventListener('click', function(){
    loginDiv.style.display='none'
    blurDiv.style.display='none'
})

form.addEventListener('submit',function(e){
    e.preventDefault()

    let userName=e.target.userName.value
    let passw=e.target.password.value
    nameSpan.style.display='none'
    
    let nameCorrect=false
    if(e.target.userName.value===''){
        nameSpan.style.display='flex'
    }else{
        nameSpan.style.display='none'
        nameCorrect=true
    }

    let passCorrect=false
    if(e.target.password.value===''){
        passSpan.style.display='flex'
    }else{
        passSpan.style.display='none'
        passCorrect=true
    }


    if (nameCorrect && passCorrect){
        loginDiv.style.display='none'
        blurDiv.style.display='none'
        user.innerHTML=userName
    }else{
        alert('....one of  your inputs are  incorrect')
    }
  
})

