let cardNumberr=document.getElementById('card-number')
let userName=document.getElementById('userName')
let cardMonth=document.getElementById('cardMonth')
let cardYear=document.getElementById('cardYear')
let cardCVC=document.getElementById('cardCVC')

let form=document.getElementById('form')

let cardNameSpan=document.getElementById('cardNameSpan')
let cardNumberSpan=document.getElementById('cardNumberSpan')
let expDateSpan=document.getElementById('expDateSpan')
let cvcSpan=document.getElementById('cvcSpan')


form.addEventListener('submit',function(e){
    e.preventDefault()

    let cardName=e.target.cardName.value
    let cardNumber=e.target.cardNumber.value
    let expDateMonth=e.target.expDateMonth.value
    let expDateYear=e.target.expDateYear.value
    let inputCVC=e.target.inputCVC.value

    let cardNamCorrect=false
    if(e.target.cardName.value===''){
        cardNameSpan.style.display='flex'
        e.target.cardName.style.borderColor='red'
    }else{
        let cleanedCardName = cardName.replaceAll(' ', '')
        for(let i of cleanedCardName){
            if('1234567890'.includes(i)){
                cardNameSpan.style.display='flex'
                cardNameSpan.innerHTML="Wrong format, letters only"
                e.target.cardName.style.borderColor='red'
                return 
            }
        }
        cardNameSpan.style.display='none'
        e.target.cardName.style.borderColor='hsl(270, 3%, 87%)'
        cardNamCorrect=true
    }
    

let cardNumbeCorrect = false
let cleanedCardNumber = cardNumber.replaceAll(' ', '')

if (cleanedCardNumber === '') {
    cardNumberSpan.innerHTML = "Can't be blank"
    cardNumberSpan.style.display = 'flex'
    e.target.cardNumber.style.borderColor = 'red'
} else {
    for (let i of cleanedCardNumber) {
        if (!('0123456789'.includes(i))) {
            cardNumberSpan.innerHTML = 'Wrong format, numbers only'
            cardNumberSpan.style.display = 'flex'
            e.target.cardNumber.style.borderColor = 'red'
            return
        }
    }

    if (cleanedCardNumber.length < 16) {
        cardNumberSpan.innerHTML = "Card number can't be less than 16 digits"
        cardNumberSpan.style.display = 'flex'
        e.target.cardNumber.style.borderColor = 'red'

    } else if (cleanedCardNumber.length > 16) {
        cardNumberSpan.innerHTML = "Card number can't be more than 16 digits"
        cardNumberSpan.style.display = 'flex'
        e.target.cardNumber.style.borderColor = 'red'

    } else {
        cardNumberSpan.style.display = 'none'
        e.target.cardNumber.style.borderColor = 'hsl(270, 3%, 87%)'
        cardNumbeCorrect = true
    }
}


    let expMonthCorrect=false
    if(expDateMonth==='' || expDateYear  ===''){
        expDateSpan.style.display='flex'
        if(expDateMonth==='' && expDateYear!==''){
            e.target.expDateMonth.style.borderColor='red'
            e.target.expDateYear.style.borderColor=' hsl(270, 3%, 87%)'
        }else if(expDateYear  ==='' && expDateMonth!==''){
            e.target.expDateYear.style.borderColor='red'
            e.target.expDateMonth.style.borderColor=' hsl(270, 3%, 87%)'
        }
        else{
            e.target.expDateMonth.style.borderColor='red'
            e.target.expDateYear.style.borderColor='red'
        }
    }
    else{
        expDateSpan.style.display='none'
        e.target.expDateMonth.style.borderColor=' hsl(270, 3%, 87%)'
        e.target.expDateYear.style.borderColor=' hsl(270, 3%, 87%)'
        expMonthCorrect=true
    }

    let cvcCorrect=false
    if(inputCVC===''){
        cvcSpan.style.display='flex'
        e.target.inputCVC.style.borderColor='red'
    }else{
        cvcSpan.style.display='none'
        e.target.inputCVC.style.borderColor='hsl(270, 3%, 87%)'
        cvcCorrect=true
    }

    if(cardNamCorrect  &&  cardNumbeCorrect && expMonthCorrect  &&  cvcCorrect){
        cardNumberr.innerHTML=cardNumber
        userName.innerHTML=cardName
        cardMonth.innerHTML=expDateMonth
        cardYear.innerHTML=expDateYear
        cardCVC.innerHTML=inputCVC
    }

})