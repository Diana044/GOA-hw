// 6)შექმენი კლასი Library, რომელსაც ექნება:

// books (მასივი)

// მეთოდები:

// addBook(book) ამატებს არგუმენტად გადაცემულ წიგნს სიის ბოლოში
// bookList() --- ბეჭდავს სიას იმის შემდეგ რაც წიგნი დაემატა

class  Library{
    constructor(books){
        this.booksArrKey=books
    }

     addBook(book) {
        this.booksArrKey.push(book)
     }

     bookList() {
        console.log(this.booksArrKey)
     }
}

const  libary1= new Library(['book1','book2','book3'])
console.log(libary1.booksArrKey)
libary1.addBook('boook4')
libary1.bookList()

