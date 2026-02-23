let body=document.body
let mainImg=document.getElementById('mainImg')
let button=document.getElementById('button')

let srcs=["images/1.svg","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png"]
let count=1
button.addEventListener('click', function(){
    let randomNumber=Math.floor(Math.random()*6)
    mainImg.src=srcs[randomNumber]
    let newDiv=document.createElement('div')
    let countText=document.createElement('p')
    countText.innerHTML=`Roll : ${count}`



    newDiv.style.cssText = `
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:19px;
        width:360px;
        background-color:rgb(242, 242, 242);
        border-radius:10px;
        border-bottom:1px solid grey;
        margin-bottom:20px;
    `

    let newImg=document.createElement('img')
    newImg.src=mainImg.src

    newImg.style.cssText = `
        width:40px;
    `


    newDiv.appendChild(countText)
    newDiv.appendChild(newImg)
    body.appendChild(newDiv)
    count++
})

