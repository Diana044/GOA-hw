let days = document.getElementById('days')
let hours = document.getElementById('hours')
let mins = document.getElementById('minutes')
let secs = document.getElementById('seconds')

let millisecondsInDay = 1000 * 60 * 60 * 24
let millisecondsInHour = 1000 * 60 * 60
let millisecondsInMinute = 1000 * 60


let now = new Date()
let incomingNewYear = new Date(now.getFullYear() + 1, 0, 1)

function newYearCounter(){
    let counterObject = new Date()
  
    let millisecondsLeft = incomingNewYear - counterObject

    if( Math.floor(millisecondsLeft / millisecondsInDay)<10){
        days.textContent=`0${ Math.floor(millisecondsLeft / millisecondsInDay)}`
    }else{
        days.textContent=Math.floor(millisecondsLeft / millisecondsInDay)
    }

    if( Math.floor(millisecondsLeft / millisecondsInHour) % 24<10){
         hours.textContent=`0${ Math.floor(millisecondsLeft / millisecondsInHour) % 24}`
    }else{
         hours.textContent=Math.floor(millisecondsLeft / millisecondsInHour) % 24
    }

    if(Math.floor(millisecondsLeft / millisecondsInMinute) % 60<10){
       mins.textContent=`0${Math.floor(millisecondsLeft / millisecondsInMinute) % 60}`
    }else{
        mins.textContent=Math.floor(millisecondsLeft / millisecondsInMinute) % 60
    }

    if( Math.floor(millisecondsLeft / 1000) % 60<10){
         secs.textContent=`0${Math.floor(millisecondsLeft / 1000) % 60}`
    }else{
        secs.textContent= Math.floor(millisecondsLeft / 1000) % 60
    }
}

setInterval(newYearCounter, 1000)

let input = document.getElementById('input')
input.addEventListener('change', function(e){
    incomingNewYear = new Date(e.target.value)
})

let clockSound = document.getElementById("clockSound")
setInterval(function(){
    clockSound.play()
}, 1000)

let jingle = document.getElementById("jingle")
jingle.play()

setInterval(function(){
    jingle.play()
}, 117000)