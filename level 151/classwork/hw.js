// level 151:
//    1) შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი


// ამ ყველაფერს დაამატეთ dom და html ის ინფუთებით შეიყვანეთ მონაცემები

class User {
    constructor(name, age) {
        this.userName = name
        this.userAge = Number(age)
    }

    changeName(newName) {
        this.userName = newName
    }

    increaseAge(years) {
        this.userAge += years
    }
}

const nameP = document.getElementById('nameP')
const ageP = document.getElementById('ageP')
const form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let inputName = e.target.name.value
    let inputAge = e.target.age.value

    let user1 = new User('Natali', 13)
    
    user1.changeName(inputName)
    user1.increaseAge(inputAge)

    console.log(user1)

    nameP.innerHTML = user1.userName
    ageP.innerHTML = user1.userAge
})