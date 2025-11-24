// let div=document.createElement('div')
// let p=document.createElement('p')
// let button=document.createElement('button')


// div.appendChild(p)
// div.appendChild(button)



// document.body.appendChild(div)



// level 118:
//    1) js ში createElement ის დახმარებით შექმენით div, p, button
// შემდეგ p და button ჩაამატეთ div ში, ამ დივს დაამატებთ dom ში

// 2) დაამატეთ საიტზე ღილაკი როცა ამ ღილაკს დააჭერთ 
// კონსოლში
//  დაიბეჭდოს რომ ღილაკს დაეჭირა და ამასთან
//  ერთად გვერძე მიეწეროს მერამდენე დაჭერა(დაკლიკება
//  მოხდა)

let btn = document.createElement('button')

document.body.appendChild(btn)

btn.innerHTML = 'click me'

let count = 0

function click() {
    count = count + 1
    console.log('buttonis clircked.')
    console.log('click amount : ' + count)
}

btn.addEventListener('click', click)
