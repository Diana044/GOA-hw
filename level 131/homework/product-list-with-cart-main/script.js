let addToCartBtn=document.getElementById('addToCartBtn')
let orderPlusMinus=document.getElementById('orderPlusMinus')
let decrementIcon=document.getElementById('decrementIcon')
let increamentIcon=document.getElementById('incrementIcon')
let itemAmount=document.getElementById('itemAmount')


let dessertNamesArr=document.getElementsByClassName('description')
let dessertPricesArr=document.getElementsByClassName('price')

decrementIcon.addEventListener('click',  function(){
    count--
    itemAmount.textContent=count
    setColor()
})

increamentIconlus.addEventListener('click', function(){
    count++
    itemAmount.textContent=count
    setColor()
})