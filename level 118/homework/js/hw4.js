// 4)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც მაშინ გამოიძახება, როცა ღილაკზე დააჭერენ, და აჩვენებს alert ს Mensagem-ით "Button clicked!".

let btn=document.getElementById('btn')
function message(){
    alert('Button clicked!')
}

btn.addEventListener('click', message)