// 8)მომხმარებელს შემოატანინე ფერი:
// "red", "green", "blue"

// switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
// თუ სხვა ფერია → default →
// "ასეთი ფერი სისტემაში არ არის"




let userNum = (prompt('enter  color  "red", "green", or  "blue"'))


switch(true){
    case (userNum ===  'red'):
        console.log('red' )
        break
    case (userNum === "green"):
        console.log('green')
        break
     case (userNum    === 'blue' ):
        console.log('blue')
        break
    default:
        console.log("ასეთი ფერი სისტემაში არ არის")
    
}