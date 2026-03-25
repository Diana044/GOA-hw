// 4)შექმენი კლასი Product, რომელსაც ექნება:

// name, price, quantity
// მეთოდი getTotalPrice() →
//  აბრუნებს მთლიან ფასს(ფასი გამრავლებული ოდენობაზე)

class Product{
    constructor(name, price, quantity){
        this.productName=name
        this.productPrice=price
        this.productQuantity=quantity
    }

    getTotalPrice(){
        return this.productPrice*this.productQuantity
    }
}

const product1 = new Product('car',40000, 2)
console.log(product1.getTotalPrice())