// 4)შექმენი მასივი პროდუქტების ობიექტებით:
// მოითხოვე:
// შექმენი მასივი, რომელიც შეიცავს მხოლოდ ხილის ტიპის პროდუქტებს.
// დაამატე დამატებითი პირობა: ფასი უნდა იყოს 2-ზე მეტი.

const products = [
    { name: "ვაშლი", type: "ხილი", price: 2 },
    { name: "სტაფილო", type: "ბოსტნეული", price: 1 },
    { name: "ბანანი", type: "ხილი", price: 3 },
    { name: "კარტოფილი", type: "ბოსტნეული", price: 2 },
    { name: "მანგო", type: "ხილი", price: 5 }
];

const newArr=products.filter(obj=>obj.type="ხილი"&& obj.price>2)

console.log(newArr)