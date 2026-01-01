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
    heartRateRandom.textContent=Math.floor(Math.random()*110)+60
}
heartBeatChanger()
setInterval(heartBeatChanger, 20000)




red.addEventListener('click',function(){
    watch.src="imgs/red.png"
})

black.addEventListener('click',function(){
    watch.src="imgs/black.png"
})

purple.addEventListener('click',function(){
    watch.src="imgs/purple.png"
})

blue.addEventListener('click',function(){
    watch.src="imgs/blue.png"
})

pink.addEventListener('click',function(){
    watch.src="imgs/pink.png"
})

buyButton.addEventListener('click', function(){
    message.style.display='flex'
    
})