// 3) HTML - ში შექმენი სამი ინფუთი სახელისთვის, მეილისთვის და პაროლისთვის, ასევე შექმენი Button-ი რომელზე დაჭერის შემდეგ ამუშავდება კონსტრუქტორ ფუნქცია და შექმნის User ობიექტებს. ეს ობიექტები ჩაამატე ლისტში და გამოაკონსოლე თქვენი User-ების ობიექტები.

let userInfoArr=[]
let form=document.getElementById('form')
let nameSpan=document.getElementById('nameSpan')
let emailSpan=document.getElementById('emailSpan')
let passSpan=document.getElementById('passSpan')


function User(name,email,pass){
    this.name=name
    this.email=email
    this.password=pass
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let nameiscorrect=false
    let emailiscorrect=false
    let passiscorrect=false



    let nameInput= e.target.name.value
    let emailInput=e.target.email.value
    let passInput=e.target.password.value

    let userInfo=new User(
        nameInput,
        emailInput,
        passInput
    )

    if(nameInput){
        nameSpan.innerHTML=''
        nameiscorrect=true
    }else{
        nameSpan.innerHTML='input must be filled!'
        nameiscorrect=false
    }
    
    if(emailInput){
        emailSpan.innerHTML=''
        emailiscorrect=true
    }else{
        emailSpan.innerHTML='input must be filled!'
        emailiscorrect=false
    }
    
    
    if(passInput){
        passSpan.innerHTML=''
        passiscorrect=true
    }else{
        passSpan.innerHTML='input must be filled!'
        passiscorrect=false
    }
    

 
    if(nameiscorrect && emailiscorrect && passiscorrect){
        userInfoArr.push(userInfo)
        console.log(userInfoArr)
        e.target.name.value = ''
        e.target.email.value=''
        e.target.password.value=''
    }else{
        alert('... something went wrong')
    }
    

})


