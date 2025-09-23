// 1)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და while loop–ით გადაუაროს ამ დიაპაზონს.
// თითო რიცხვისთვის შეამოწმეთ if else-ით:
// თუ ლუწია → დაბეჭდოს "ლუწია"
// თუ კენტია → "კენტია". გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

function numbers(){
    let start=2
    let end=25
    i=start
    while(i<=end){
        if(i%2==0){
            console.log(i,'is even')
        }else{
            console.log(i,' is odd')
        }
       i++
    }
    } 

numbers()



