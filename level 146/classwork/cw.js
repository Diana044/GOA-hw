// მოცემული ობიექტიდან დესტრუქცია გაუკეთე
//  name და city ს დანარჩენი კი გამოიტანე სპრედ ოპერატორის დახმარებით
// 

store = {
  name: "MegaShop",
  address: {
    city: "Batumi",
    location: {
      street: "Chavchavadze",
      number: 10
    }
  },
  products: [
    {
      name: "Laptop",
      price: 2500
    },
    {
      name: "Phone",
      price: 1200
    }
  ]
}

const {name, address:{city}, ...rest} = store

console.log(name, city, rest)