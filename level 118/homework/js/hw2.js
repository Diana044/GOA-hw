// 2)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შეცვლის <button> ელემენტის ფონს წითლად და ტექსტის ფერს – თეთრად.

let button=document.getElementById('btn')

function change(){
    button.style.backgroundColor='red'
    button.style.color='white'
}

btn.addEventListener('click', change)