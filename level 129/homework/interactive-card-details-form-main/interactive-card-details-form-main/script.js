let cardNumber=document.getElementById('card-number')
let userName=document.getElementById('userName')
let cardMonth=document.getElementById('cardMonth')
let cardYear=document.getElementById('cardYear')
let cardCVC=document.getElementById('cardCVC')

let form=document.getElementById('form')

let cardNameSpan=document.getElementById('cardNameSpan')
let cardNumberSpan=document.getElementById('cardNumberSpan')



form.addEventListener('submit',function(e){
    e.preventDefault()

    let cardName=e.target.cardName.value
    let cardNumber=e.target.cardNumber.value
    let expDateMonth=e.target.expDateMonth.value
    let expDateYear=e.target.expDateYear.value
    let CVC=e.target.CVC.value

    cardName=false
    if(e.target.cardName.value===''){
        cardNameSpan.style.display='flex'
    }else{
        cardNameSpan.style.display='none'
        cardName=true
    }
    
    cardNumber=false
    if(e.target.cardNumber.value===''){
        cardNumberSpan.innerHTML="Can't be blank"
        cardNumberSpan.style.display='flex'
    }else{
        cardNumberSpan.style.display='none'
        cardNumber=true
    }

      cardNumber=false
    if(e.target.cardNumber.value.type!=Number){
        cardNumberSpan.style.display='flex'
        cardNumberSpan.innerHTML="Wrong format, numbers only"
    }else{
        cardNumberSpan.style.display='none'
        cardNumber=true
    }
})