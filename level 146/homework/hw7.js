//  შექმენი ახალი მასივი, სადაც ყველა პროდუქტის ფასი 10%-ით შემცირებული იქნება.

const products = [
  {name: "Phone", price: 1000},
  {name: "Laptop", price: 2000}
];

const discounted=products.map(eachObj=>{
    const{name,price}=eachObj
    return{
        name:name,
        price:price*0.9  

    }
})

console.log(discounted)