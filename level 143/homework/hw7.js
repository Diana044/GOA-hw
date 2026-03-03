// 7)ცვლადი role:
// შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი

// "admin"

// "user"

// "guest"

// switch–case-ით განსაზღვრე წვდომა.
// თუ სხვა მნიშვნელობაა -> default ->
// "როლი არ არის განსაზღვრული"


let role= 'admin'

switch(role){
    case 'admin':
        console.log('admin')
        break
    case 'user':
        console.log('admin')
        break
    case 'guest':
        console.log('admin')
        break
    default:
        console.log("როლი არ არის განსაზღვრული")
        break
}