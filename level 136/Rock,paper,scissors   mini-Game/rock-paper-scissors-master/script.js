let scoreCount = document.getElementById('scoreCount')
let imagesArr = document.getElementsByClassName('images')

let choiceDiv = document.getElementById('choiceDiv')
let choiceDiv2 = document.getElementById('choiceDiv2')
let userChoice = document.getElementById('userChoice')
let computerChoice = document.getElementById('computerChoice')

let loseOrWin = document.getElementById('loseOrWin')
let playAgain = document.getElementById('playAgain')

let rulesDiv=document.getElementById('rulesDiv')
let closeingIcon=document.getElementById('closeingIcon')
let rulesButton=document.getElementById('rulesButton')
let overlay=document.getElementById('overlay')

let imageSources = ["5finger.png", "2fingers.png", "0fingers.png"]

function computerMove() {
    let randomNumber = Math.floor(Math.random() * 3)
    computerChoice.src = imageSources[randomNumber]
}

let score=0
for (let i = 0; i < imagesArr.length; i++) {
    imagesArr[i].addEventListener('click', function () {

        choiceDiv.style.display = 'none'
        choiceDiv2.style.display = 'flex'

        userChoice.src = imageSources[i]

        computerMove()

        if (userChoice.src === computerChoice.src) {
            loseOrWin.textContent = "TIE"
        } 
        else if (
            (userChoice.src.includes(imageSources[0]) && computerChoice.src.includes(imageSources[2])) ||
            (userChoice.src.includes(imageSources[1]) && computerChoice.src.includes(imageSources[0])) ||
            (userChoice.src.includes(imageSources[2]) && computerChoice.src.includes(imageSources[1]))
        ) {
            loseOrWin.textContent = "YOU WIN"
            score++
            scoreCount.textContent=score
        } 
        else {
            loseOrWin.textContent = "YOU LOSE"
        }
    })
}

playAgain.addEventListener('click', function () {
    choiceDiv.style.display = 'flex'
    choiceDiv2.style.display = 'none'
})

rulesButton.addEventListener('click',function(){
    rulesDiv.style.display='flex'
    overlay.style.display='block'
    
})
closeingIcon.addEventListener('click',function(){
    rulesDiv.style.display='none'
    overlay.style.display='none'
    closeingIcon.style.cursor='pointer'
})