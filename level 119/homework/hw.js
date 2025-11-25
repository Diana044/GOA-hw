let plus=document.getElementById('plus')
let minus=document.getElementById('minus')
let reset=document.getElementById('reset')
let number=document.getElementById('number')

let count=0

function setColor(){
    if(count>0){
        number.style.color='green'
    }else if(count<0){
        number.style.color='red'
    }else if(count===0){
        number.style.color='white'
}

}
plus.addEventListener('click', function(){
    count++
    number.textContent=count
    setColor()
})
minus.addEventListener('click',  function(){
    count--
    number.textContent=count
    setColor()
})

reset.addEventListener('click', function(){
    count=0
    number.textContent=count
    setColor()
})