// 7)შექმენი კლასი Password

// ქონდეს მნიშვნელობა --> value


// მეთოდები:
// changePassword(newPass)
// checkPassword() --> გამოაქვს შეცვლილი პაროლი

class Password{
    constructor(value){
        this.valueKey=value
    }

    changePassword(newPass){
        this.valueKey=newPass
    }

     checkPassword(){
        console.log(this.valueKey)
     }
}

const pass1=new Password('1234567')
console.log(pass1)
pass1.changePassword('diana123')
pass1.checkPassword()