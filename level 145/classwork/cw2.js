// 2) შექმენი ცარიელი ობიექტი და ამ ობიექტში დესტრუქციის დროს გადაეცი ის მნიშვნელობები რასაც მომხმარებელი შემოიყვანს, მომხმარებელს შემოაყვანინე სახელი და გვარი, default მნიშნველობად ასევე ყველას მიანიჭე რაიმე რენდომ ასაკი და იმეილი


let userName = prompt('enterr  your  name')
let userSur = prompt('enterr  your  name')


const user   =  {
    
}

const{name=userName,  sur  = userSur,  randomAge =  21,   randomMail = `${userName}${userSur}@gmail.com`}  = user

console.log(name,sur,randomAge, randomMail)
