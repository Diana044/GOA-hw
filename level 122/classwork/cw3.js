let button=document.getElementById('btn1')
let arr=[]

function Person(name, pass) {
    this.name = name
    this.pass = pass
}


button.addEventListener('click', function(){
    let name=prompt('enter name')
    let pass=prompt('enter password')
    console.log(name)
    console.log(pass)
    let user1=new Person(name,pass)
    arr.push(user1)
    console.log(arr)
})

