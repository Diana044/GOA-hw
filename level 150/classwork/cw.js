class Bank{
    constructor(name,surname,balance){
        this.userName = name
        this.userSurname=surname
        this.userBalance=balance
    }

    deposit(){
        let amount = prompt("How much would you like to deposit?")
        this.userBalance+=Number(amount)
        console.log(`${this.userName}  your balance is ${this.userBalance}`)
    }
}

let person1= new Bank('salome','yavelaashvili',0)

person1.deposit()

// შექმენი კლასი სახელად Bank რომელშიც გექნება მომხმარებლის სახელი, 
// გვარი და მისი ბალანსი(თანხა რომელიც აქვს ანგარიშზე), ასევე
//  რა რაოდენობის თანხის შეტანა სურს ექუნთზე, შექმენი კლასში მეთოდი
//  რომლის მეშვეობით მომხმარებელი შეძლებს ბალანსზე
//  თანხის შეტანას და დამატებას, შედეგი გამოიტანეთ კონსოლში