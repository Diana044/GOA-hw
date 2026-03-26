// 5)შექმენი კლასი BankAccount, რომელსაც ექნება:

// owner, balance
// მეთოდი deposit(amount) --> შეგვაქვს თანხა ანგარიშზე და ბეჭდავს განახლებულ ბალანსს
// მეთოდი withdraw(amount) --> გაგვაქვს თანხა ანგარიშიდან და ბეჭდავს დარჩენილ თანხას ანგარიშზე

// დააკონსოლლოგეთ ბოლოს მთლიანი ობიექტი რომ ნახოთ შეცვლილი ობიექტი


class  BankAccount{
    constructor(owner,balance){
        this.owner =owner
        this.balance=balance
    }

    deposit(amount){
        this.balance+=amount
        console.log(`you deposited ${amount} and now your balance is ${this.balance}`)
    }

   withdraw(amount){
        this.balance-=amount
        console.log(`you withdrawed ${amount} and now your balance is ${this.balance}`)
    }
}

const accaaunt1= new BankAccount('diana',100)
console.log(accaaunt1)

accaaunt1.deposit(200)
accaaunt1.deposit(500)
accaaunt1.withdraw(100)




