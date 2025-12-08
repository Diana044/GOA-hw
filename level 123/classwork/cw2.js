// შექმენით ორი input ველი რომელშიც შეიყვანთ თქვენს სახელს და ასაკს, შემდეგ კონსტრუქტორის გამოყენებით დაწერეთ ფუნქცია რომელიც ამუშავდება submit ღილაკზე დაჭერისას და  საიტზე გამოიტანს  თქვენს შეყვანილ სახელს და  ასაკი
let form = document.getElementById('form')
let li1 = document.getElementById('li1')

function Me(name, age) {
    this.myName = name
    this.myAge = age
    this.func = function () {
        return `My name is ${this.myName} and my age is ${this.myAge}`
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let name = e.target.name.value
    let age = e.target.age.value

    let myself = new Me(name, age)

    li1.innerHTML = myself.func()
  
})
