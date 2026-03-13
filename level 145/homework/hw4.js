// 📌 დესტრუქციის გამოყენებით გამოიტანე:
// name
// surname
// country
// city name
// street


const user = {
  name: "Nika",
  surname: "Beridze",
  address: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Pekini"
    }
  }
}

const {
    name, 
    surname,
    address:{
        country,
        city:{
            name:cityName,
            street
        }
    }

} =user

console.log(name, surname, country, cityName, street)