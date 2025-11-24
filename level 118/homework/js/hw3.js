// 3)შექმენით HTML გვერდი ცარიელი <div> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შექმნის ახალ <p> ელემენტს ტექსტით "New paragraph" და დაამატებს მას <div>-ის შიგნით.

let div=document.getElementById('div')

function ptag(){
    let pcreating=document.createElement('p')
    pcreating.textContent='New paragraph'
    div.appendChild(pcreating)
}

ptag()