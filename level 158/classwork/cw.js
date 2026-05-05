let accaounts =[
    {
        name:'diana',
        age:222,
        city:'Tbilisi'
    },

    {
        name:'mari',
        age:30,
        city:'Batumi'
    },

    {
        name:'irakli',
        age:55,
        city:'Gori'
    }
]

let stringed = JSON.stringify(accaounts)

localStorage.setItem('accs',stringed)
console.log(stringed)

let parsed = JSON.parse(localStorage.getItem('accs'))

console.log(parsed)