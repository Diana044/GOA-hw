let li1=document.getElementById('li1')

function clock(){
    let time=new Date()

    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()
    li1.innerHTML=hours + ":" + minutes + ":" +seconds 
}

setInterval(clock, 1000)
