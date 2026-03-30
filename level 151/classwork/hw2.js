let operations=document.getElementById('operations')
let mimateba=document.getElementById('mimateba')
let gamokleba=document.getElementById('gamokleba')
let gamravleba=document.getElementById('gamravleba')
let gayofa=document.getElementById('gayofa')


class Calculator{
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    add(){
        console.log(this.a+this.b) 
    }
    subtract(){
        console.log(this.a-this.b) 
    }
    multiply(){
        console.log(this.a*this.b)
    }
    divide(){
        console.log(this.a/this.b)
    }
    update(num1,num2){
        this.a=num1
        this.b=num2
    }
}
mimateba.addEventListener('click',function(){
    numbers2.add()

})
gamokleba.addEventListener('click',function(){
   numbers2.subtract()

})
gamravleba.addEventListener('click',function(){
    numbers2.multiply()

})
gayofa.addEventListener('click',function(){
    numbers2.divide()
})



let numbers2 = new Calculator(20,5)

let numbers3 = new Calculator(5,5)

operations.innerHTML=numbers2
