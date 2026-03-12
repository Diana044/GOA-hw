
// დესტრუქციის გამოყენებით ერთ ლაინში გამოიტანე კონსოლში:
// company name
// country
// city name
// street
// პირველი employee-ს name
// მეორე employee-ს age
// const { name,location} = company

const company = {
  name: "TechCorp",
  location: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Rustaveli"
    }
  },
  employees: [
    { name: "Nika", age: 22 },
    { name: "Giorgi", age: 25 }
  ]
}

const {name,
  location : {
  country,
  city,
  city :{name:cityName,street}
},
  employees: [
    { name: emp1Name }, 
    { age }
  ]
} = company

console.log(name,country,cityName,street,emp1Name,age)







