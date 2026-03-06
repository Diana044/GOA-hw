// 3) მოცემულია ლისტი

const user = [{
    name: "nika",
    surname: "nishnianidze",
    address: {
        city: {
            street: "beliashvili"
        },
        country: "Georgia"
    }
}] 


const [{name, surname, address, address:{city,  country, city:{street}}} ] =  user



console.log(name,surname, address,city,country ,street)


// მოახდინეთ ყველაფრის დესტრუქცია და დაბეჭდე საერთოდ ყველაფრის მნიშვნელობა