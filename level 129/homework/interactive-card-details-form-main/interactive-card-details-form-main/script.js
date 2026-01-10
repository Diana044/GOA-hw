let cardNumber=document.getElementById('card-number')
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
    let CVC=e.target.CVC.value

    let cardNamCorrect=false
    if(e.target.cardName.value===''){
        cardNameSpan.style.display='flex'
        e.target.cardName.style.borderColor='red'
    }else{
        cardNameSpan.style.display='none'
        e.target.cardName.style.borderColor='hsl(270, 3%, 87%)'
        cardNamCorrect=true
    }
    
    let cardNumbeCorrect=false
    if(e.target.cardNumber.value===''){
        cardNumberSpan.innerHTML="Can't be blank"
        cardNumberSpan.style.display='flex'
        e.target.cardNumber.style.borderColor='red'
    }
    else{
        for(let i of e.target.cardNumber.value){
            if(!('1234567890'.includes(i))){
                cardNumberSpan.innerHTML='Wrong format, number only'
                cardNumberSpan.style.display='flex'
                return
            }
        }
        cardNumberSpan.style.display='none'
        e.target.cardNumber.style.borderColor='hsl(270, 3%, 87%)'
        cardNumbeCorrect=true
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
    if(CVC===''){
        cvcSpan.style.display='flex'
        e.target.CVC.style.borderColor='red'
    }else{
        cvcSpan.style.display='none'
        e.target.CVC.style.borderColor='hsl(270, 3%, 87%)'
        cvcCorrect=true
    }

})