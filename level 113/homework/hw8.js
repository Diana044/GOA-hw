// 8)შექმენი ობიექტი book = {title: "1984", author: "Orwell", pages: 328}
// წაშალე pages  და კონსოლში დაბეჭდე ის  ქიები რომლებიც დარჩა ობიექტში.
let  book = {
    title: "1984",
    author: "Orwell",
    pages: 328
}
delete book.pages
console.log(book.title, book.author)

console.log('------------------------')