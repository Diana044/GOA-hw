// 7)შექმენით HTML გვერდი <div id="container"></div> და <button> ელემენტით.
// -----ყოველი დაჭერისას შექმენით ახალი <p> ელემენტი ტექსტით "Item X" (X = დამატებული ელემენტების რაოდენობა).
// -----დაამატეთ ახალი ელემენტი container-ში.

let div=document.getElementById('container')
let btn=document.getElementById('button')
let count =0
function func(){
    count++
    let creatP=document.createElement('p')
    creatP.textContent= `item ${count} `
    div.appendChild(creatP)

}

btn.addEventListener('click',func)