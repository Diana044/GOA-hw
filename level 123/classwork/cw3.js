// შექმენი input ველი რომელიც მიიღებს მომხმარებლის ასაკს და მეორე input რომელიც მიიღებს  რიცხვს თუ რამდენი წლით უნდა მოგზაურობა მომავალში, calculate ღილაკზე დაჭერის შემდეგ ამუშავდე კონსტრუქტორის ფუნქცია რომელიც გამოითვლის თუ რამდენი წლის იქნება მომხმარებელი დროში მოგზაურობის შემდეგ, შედეგი გამოიტანეთ საიტზე 
let form = document.getElementById('form')
let p = document.getElementById('p')

function Travel(userAge, userYear) {
    this.age = Number(userAge)
    this.travelYear = Number(userYear)
    this.canc = function() {
        let finalAge = this.age + this.travelYear
        return `After traveling ${this.travelYear} years into the future, you will be ${finalAge} years old.`
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let result = new Travel(e.target.age.value, e.target.year.value)
    p.innerHTML = result.canc()
})
