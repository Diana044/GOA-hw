// level 125(წინა ლეველები შეგვეშალა და შემთხვევით გადავახტით ყველაფერი სწორად არის):
//1) შექმენით ღილაკი როდესაც ამ ღილაკს დავაჭერთ კონსოლში დაიბეჭდოს ამჟამინდელი დრო ასეთი სახით 21:30:07

// 2) როცა ღილაკს დააჭერს კონსოლის ნაცვლად დომში განახლდეს


let btn = document.getElementById('btn')

btn.addEventListener('click',function (){
    let time = new Date()

    btn.innerHTML=time.getHours() + ":" +time.getMinutes() + ":" +time.getSeconds()
})


