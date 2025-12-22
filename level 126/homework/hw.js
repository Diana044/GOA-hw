let days = document.getElementById('days')
let hours = document.getElementById('hours')
let mins = document.getElementById('minutes')
let secs = document.getElementById('seconds')

let millisecondsInDay = 1000 * 60 * 60 * 24
let millisecondsInHour = 1000 * 60 * 60
let millisecondsInMinute = 1000 * 60

function newYearCounter(){
    let counterObject = new Date()
    let incomingNewYear = new Date(counterObject.getFullYear() + 1, 0, 1)

    let millisecondsLeft = incomingNewYear - counterObject

    days.textContent = Math.floor(millisecondsLeft / millisecondsInDay)
    hours.textContent = Math.floor(millisecondsLeft / millisecondsInHour) % 24
    mins.textContent = Math.floor(millisecondsLeft / millisecondsInMinute) % 60
    secs.textContent = Math.floor(millisecondsLeft / 1000) % 60
}

newYearCounter()
setInterval(newYearCounter, 1000)

let clockSound = document.getElementById("clockSound")
setInterval(function(){
    clockSound.play()
}, 1000)

let jingle = document.getElementById("jingle")
jingle.play()

setInterval(function(){
    jingle.play()
}, 1000 * 117)
