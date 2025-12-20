let days=document.getElementById('days')
let hours=document.getElementById('hours')
let mins=document.getElementById('minutes')
let secs=document.getElementById('seconds')

let millisecondsInDay=1000 * 60 * 60 * 24
let millisecondsInHour=1000 * 60 * 60
let millisecondsInMinute=1000 *60

function newYearCounter(){
    let counterObject= new Date()
    let incomingNewYear= new Date(counterObject.getFullYear()+1,0,1)

    let millisecondsLeft=incomingNewYear-counterObject


    let daysLeft=Math.floor(millisecondsLeft / millisecondsInDay)
    let hoursLeft=Math.floor(millisecondsLeft/millisecondsInHour)%24
    let minsLeft=Math.floor(millisecondsLeft/ millisecondsInMinute)%60
    let secsLeft=Math.floor(millisecondsLeft/1000)%60

    days.textContent=daysLeft
    hours.textContent=hoursLeft
    mins.textContent=minsLeft
    secs.textContent=secsLeft

}

let clockSound = new Audio("clock.mp3")
setInterval(newYearCounter,1000)
setInterval(function(){
    clockSound.play()
}, 1000)
let jingle = new Audio("jingle-bells.mp3")
jingle.play()
setInterval(function(){
    let jingle = new Audio("jingle-bells.mp3")
    jingle.play()
}, 1000*117)