// HTML-ში შექმენით ფორმა სადაც გექნებათ სამი input ველი, სახელისთვის, გვარისთვის და ასაკისთვის. submit-ღილაკის გამოყენებით გააგზავნეთ შეყვანილი ინფორმაცია რომელიც გამოჩნდება ლისტში, თითოეული გაგზავნის შემდეგ უნდა დაემატოს ახალი ლისტი სადაც გამოიტანთ იმ ინფორმაციას რაც input-ში შეიყვანეთ. ყოველი submit ღილაკზე დაჭერის შემდეგ უნდა იქმნებოდეს ახალი ლისტი. ეს ყველაფერი გაალამაზეთ CSS-ის გამოყენებით

let form=document.getElementById('form')
let div=document.getElementById('list-div')
let nameP=document.getElementById('nameP')
let surnameP=document.getElementById('surnameP')
let ageP=document.getElementById('ageP')


let iscorrectname=false
let iscorrectsurname=false
let iscorrectage=false


form.addEventListener('submit', function(e){
    e.preventDefault()
    let name=e.target.name.value
    let surname=e.target.surname.value
    let age=e.target.age.value

    
    let ul=document.createElement('ul')
    div.appendChild(ul)

    if(name=='' ){
        nameP.innerHTML='Input must be filled!'
        iscorrectname=true
    }else{
        nameP.innerHTML=''
        iscorrectname=false

    }
    
    if(surname=='' ){
        surnameP.innerHTML='Input must be filled!'
        iscorrectsurname=true
    }else{
        surnameP.innerHTML=''
        iscorrectsurname=false

    }
    if(age=='' ){
        ageP.innerHTML='Input must be filled!'
        iscorrectage=true
        
    }else{
        ageP.innerHTML=''
        iscorrectage=false
    }

    if(iscorrectname==false && iscorrectsurname==false && iscorrectage==false){          
    ul.innerHTML+= `
    <p>NEW</p>
    <li>user name ${name}</li>
    <li>user surname ${surname}</li>
    <li>user age ${age}</li>
` }
    
    nameP.style.color='red'
    surnameP.style.color='red'
    ageP.style.color='red'
    


    e.target.name.value = ''
    e.target.surname.value = ''
    e.target.age.value = ''

    console.log('username',name)
    console.log('user surname',surname)
    console.log('user age',age)

})
