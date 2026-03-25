// 1)შექმენი კლასი Car, რომელსაც ექნება:

// properties: brand, model, year
// მეთოდი getInfo(), რომელიც აბრუნებს სტრინგს მანქანის შესახებ


class car{
    constructor(brand, model, year){
        this.brandName = brand
        this.modelName= model
        this.yearName=year
    }

    getInfo(){
        return `cars brand is ${this.brandName} , model is ${this.modelName}and it's from ${this.yearName}`
    }
}

let car1=new car('mercedes-BENZ','A-class', 2022)


console.log(car1)
console.log(car1.getInfo())








// 6)შექმენი კლასი Library, რომელსაც ექნება:

// books (მასივი)

// მეთოდები:

// addBook(book) ამატებს არგუმენტად გადაცემულ წიგნს სიის ბოლოში
// bookList() --- ბეჭდავს სიას იმის შემდეგ რაც წიგნი დაემატა

// 7)შექმენი კლასი Password

// ქონდეს მნიშვნელობა --> value


// მეთოდები:
// changePassword(newPass)
// checkPassword() --> გამოაქვს შეცვლილი პაროლი