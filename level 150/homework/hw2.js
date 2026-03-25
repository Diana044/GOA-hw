// 2)შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი


class User{
    constructor(name,age){
        this.userName=name
        this.userAge=age
    }

    changeName(newName){
        this.userName=newName
    }

     increaseAge(howMuchToIncrease){
        this.userAge +=howMuchToIncrease
     }
}

let user1= new User('natali',13)
console.log(user1)

user1.changeName('diana')
user1.increaseAge(5)
console.log(user1)