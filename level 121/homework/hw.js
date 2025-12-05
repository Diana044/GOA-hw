// HTML-ში შექმენით ფორმა სადაც გექნებათ სამი input ველი, სახელისთვის, გვარისთვის და ასაკისთვის. submit-ღილაკის გამოყენებით გააგზავნეთ შეყვანილი ინფორმაცია რომელიც გამოჩნდება ლისტში, თითოეული გაგზავნის შემდეგ უნდა დაემატოს ახალი ლისტი სადაც გამოიტანთ იმ ინფორმაციას რაც input-ში შეიყვანეთ. ყოველი submit ღილაკზე დაჭერის შემდეგ უნდა იქმნებოდეს ახალი ლისტი. ეს ყველაფერი გაალამაზეთ CSS-ის გამოყენებით

let form=document.getElementById('form')
let div=document.getElementById('list-div')



form.addEventListener('submit', function(e){
    e.preventDefault()
    let name=e.target.name.value
    let surname=e.target.surname.value
    let age=e.target.age.value

    let ul=document.createElement('ul')
    ul.innerHTML= `
          <li>user name ${name}</li>
          <li>user surname ${surname}</li>
          <li>user age ${age}</li>
     `
   div.appendChild(ul)

    console.log('username',name)
    console.log('user surname',surname)
    console.log('user age',age)

})