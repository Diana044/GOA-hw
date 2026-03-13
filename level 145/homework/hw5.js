// დესტრუქციის გამოყენებით გამოიტანე:
// brand
// model
// engine type
// hp
// torque


const car = {
  brand: "BMW",
  model: "M5",
  engine: {
    type: "V8",
    power: {
      hp: 600,
      torque: 750
    }
  }
}

const {
    brand,
    model,
    engine:{
        type,
        power:{
            hp,
            torque
        }
    }
} = car

console.log(car.brand,car.model, car.engine.type,car.engine.power.hp,car.engine.power.torque)

console.log(brand, model, type, hp, torque)