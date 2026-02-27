let total = document.getElementById('total')
let   = document.getElementById('remaining')
let input = document.getElementById('text')



input.addEventListener('input',function(e){
    let characterCount = e.target.value.length
    total.innerHTML = characterCount
    
    if(characterCount > 49){
        e.target.value =  e.target.value.slice(0, -1)
    }

    remaining.innerHTML=50-characterCount  
})