let cardNumberr=document.getElementById('card-number')
let userName=document.getElementById('userName')
let cardMonth=document.getElementById('cardMonth')
let cardYear=document.getElementById('cardYear')
let cardCVC=document.getElementById('cardCVC')

let form=document.getElementById('form')

let cardNameSpan=document.getElementById('cardNameSpan')
let cardNumberSpan=document.getElementById('cardNumberSpan')
let expDateSpan=document.getElementById('expDateSpan')
let mmSpan=document.getElementById('mmSpan')
let cvcSpan=document.getElementById('cvcSpan')



date=new Date()
let year=date.getFullYear()

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let cardName = e.target.cardName.value
    let cardNumber = e.target.cardNumber.value
    let expDateMonth = e.target.expDateMonth.value
    let expDateYear = e.target.expDateYear.value
    let inputCVC = e.target.inputCVC.value

    let cardNamCorrect = false
    let cardNumbeCorrect = false
    let expMonthCorrect = false
    let cvcCorrect = false

    //  iser Name 
    if (cardName === '') {
        cardNameSpan.innerHTML = "* Can't be blank"
        cardNameSpan.style.display = 'flex'
        e.target.cardName.style.borderColor = 'red'
    } else {
        let cleanedCardName = cardName.replaceAll(' ', '')
        let valid = true
        for (let i of cleanedCardName) {
            if ('0123456789'.includes(i)) {
                valid = false
                break
            }
        }
        if (!valid) {
            cardNameSpan.innerHTML = "* Wrong format, letters only"
            cardNameSpan.style.display = 'flex'
            e.target.cardName.style.borderColor = 'red'
        } else {
            cardNameSpan.style.display = 'none'
            e.target.cardName.style.borderColor = 'hsl(270, 3%, 87%)'
            cardNamCorrect = true
        }
    }

    // Card Number 
    let cleanedCardNumber = cardNumber.replaceAll(' ', '')
    if (cleanedCardNumber === '') {
        cardNumberSpan.innerHTML = "* Can't be blank"
        cardNumberSpan.style.display = 'flex'
        e.target.cardNumber.style.borderColor = 'red'
    } else {
        let valid = true
        for (let i of cleanedCardNumber) {
            if (!'0123456789'.includes(i)) {
                valid = false
                break
            }
        }

        if (!valid) {
            cardNumberSpan.innerHTML = "* Wrong format, numbers only"
            cardNumberSpan.style.display = 'flex'
            e.target.cardNumber.style.borderColor = 'red'
        } else if (cleanedCardNumber.length < 16) {
            cardNumberSpan.innerHTML = "* Card number can't be less than 16 digits"
            cardNumberSpan.style.display = 'flex'
            e.target.cardNumber.style.borderColor = 'red'
        } else if (cleanedCardNumber.length > 16) {
            cardNumberSpan.innerHTML = "* Card number can't be more than 16 digits"
            cardNumberSpan.style.display = 'flex'
            e.target.cardNumber.style.borderColor = 'red'
        } else {
            cardNumberSpan.style.display = 'none'
            e.target.cardNumber.style.borderColor = 'hsl(270, 3%, 87%)'
            cardNumbeCorrect = true
        }
    }

    // exp
    let cleanMonth = ''
    for (let char of expDateMonth) {
        if ('0123456789'.includes(char)){
            cleanMonth += char
        } 
    }
    expDateMonth = cleanMonth

    let cleanYear = ''
    for (let char of expDateYear) {
        if ('0123456789'.includes(char)){
         cleanYear += char
        }
    }
    expDateYear = cleanYear

    if (expDateMonth === '' || expDateYear === '') {
        expDateSpan.innerHTML = "* Can't be blank"
        expDateSpan.style.display = 'flex'
        
        if (expDateMonth === ''){
            e.target.expDateMonth.style.borderColor = 'red'
        } 
        if (expDateYear === ''){
            e.target.expDateYear.style.borderColor = 'red'
        }
    } else if (Number(expDateMonth) < 1 || Number(expDateMonth) > 12) {
        expDateSpan.innerHTML = "* Month must be between 01 and 12"
        expDateSpan.style.display = 'flex'
        e.target.expDateMonth.style.borderColor = 'red'
        e.target.expDateYear.style.borderColor = 'hsl(270, 3%, 87%)'
    } else if (Number(expDateYear) < (year % 100)) { 
        expDateSpan.innerHTML = "* Your card is expired"
        expDateSpan.style.display = 'flex'
        e.target.expDateYear.style.borderColor = 'red'
        e.target.expDateMonth.style.borderColor = 'hsl(270, 3%, 87%)'
    } else {
        expDateSpan.style.display = 'none'
        e.target.expDateMonth.style.borderColor = 'hsl(270, 3%, 87%)'
        e.target.expDateYear.style.borderColor = 'hsl(270, 3%, 87%)'
        expMonthCorrect = true
    }


// cvc
if (inputCVC === '') {
    cvcSpan.style.display = 'flex'
    cvcSpan.innerHTML = "* Can't be blank"
    e.target.inputCVC.style.borderColor = 'red'
} 
else if (inputCVC.length > 3) {
    cvcSpan.style.display = 'flex'
    cvcSpan.innerHTML = "* Can't be more than 3 digits"
    e.target.inputCVC.style.borderColor = 'red'
}else if(inputCVC.length <3){
    cvcSpan.style.display = 'flex'
    cvcSpan.innerHTML = "* Can't be less than 3 digits"
    e.target.inputCVC.style.borderColor = 'red'
}
else {
    let valid = true
    for (let char of inputCVC) {
        if (!'0123456789'.includes(char)) {
            valid = false
            break
        }
    }

    if (!valid) {
        cvcSpan.style.display = 'flex'
        cvcSpan.innerHTML = "* Can't contain letters"
        e.target.inputCVC.style.borderColor = 'red'
    } else {
        cvcSpan.style.display = 'none'
        e.target.inputCVC.style.borderColor = 'hsl(270, 3%, 87%)'
        cvcCorrect = true
    }
}


    if (cardNamCorrect && cardNumbeCorrect && expMonthCorrect && cvcCorrect){
        cardNumberr.innerHTML = cardNumber
        userName.innerHTML = cardName
        cardMonth.innerHTML = expDateMonth
        cardYear.innerHTML = expDateYear
        cardCVC.innerHTML = inputCVC
    }
})
