// შექმენი ფორმა სადაც გექნება სამი input-ი, სახელისთვის, ასაკისთვის და პროფესიისთვის, ასევე submit ღილაკი. შექმენი კონსტრუქტორ ფუნქცია რომელის პარამეტრად მიიღებს სახელს, ასაკს და პროფესიას, შექმენი ფუნქცია კონტრუქტორში რომელიც დააბრუნებს სახელი - პროფესია (ანუ მომხარებლის სახელს და გვერდით მის პროფესიას). dom-ში შექმენი div და მასში ჩაამატე პარაგრამი რომლის მნიშვნელობა იქნება ის რასაც კონსტრუქტორის ფუნქცია დააბრუნებს

let form = document.getElementById('form')
let nameSp = document.getElementById('nameSp')
let ageSp = document.getElementById('ageSp')
let profSp = document.getElementById('profSp')
let body = document.body

function Person(userName, userAge, userProfession) {
    this.name = userName
    this.age = Number(userAge)
    this.profession = userProfession
    this.aboutUser = function () {
        return `Users name is ${this.name} and their profession is ${this.profession}`
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let nameValue = e.target.userName.value
    let ageValue = Number(e.target.userAge.value)
    let profValue = e.target.userProf.value

    let nameCorrect = false
    if (nameValue === "") {
        nameSp.innerHTML = "Input must be filled!"
    } else {
        nameSp.innerHTML = ""
        nameCorrect = true
    }

    let ageCorrect = false
    if (e.target.userAge.value === "") {
        ageSp.innerHTML = "Input must be filled!"
    } else if (ageValue < 18) {
        ageSp.innerHTML = `${nameValue} unfortunately, you are under 18 <br> come back in ${18-ageValue} years`
    } else {
        ageSp.innerHTML = ""
        ageCorrect = true
    }

    let profCorrect = false
    if (profValue === "") {
        profSp.innerHTML = "Input must be filled!"
    } else {
        profSp.innerHTML = ""
        profCorrect = true
    }

    if (nameCorrect && ageCorrect && profCorrect) {
        let person1 = new Person(nameValue, ageValue, profValue)

        let div = document.createElement("div")
        let p = document.createElement("p")

        p.innerHTML = person1.aboutUser()

        div.appendChild(p)
        body.appendChild(div)

        alert(`Welcome, ${nameValue}!`)
    } else {
        alert("Oops, one of your infos is unfilled or incorrect!")
    }
    
    e.target.userName.value = ""
    e.target.userAge.value = ""
    e.target.userProf.value = ""
})
