// 5)შექმენი ობიექტი movie ველებით: name, genre, rating.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)

let movie= {    
    name :'mentalist',
    ganre : 'crime',
    'the rat ing' :8.2,
}
let keys=''
for(let i=0; i<Object.keys(movie).length; i++){
    keys=Object.keys(movie)[i]
    console.log(keys)
}

console.log('--------')

let movieValuesList=Object.values(movie)

for(let i in movieValuesList){
    console.log(movieValuesList[i])
}

console.log('------------------------')

