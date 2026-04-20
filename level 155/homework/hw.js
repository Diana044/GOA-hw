// დავალება: "ალქიმიკოსის ლაბორატორია და გილდიის საცავი"
// შესავალი: შენი მიზანია შექმნა ლოგიკა, რომელიც მართავს მოთამაშეების 
// ინვენტარს, ამოწმებს აქვთ თუ არა საკმარისი რესურსები რთული ელექსირების 
// დასამზადებლად და ფილტრავს გამოუსადეგარ ნივთებს.

// ნაბიჯი 1: გილდიის საცავი (Union - გაერთიანება)
// შექმენი ორი Set: player1Bag და player2Bag (მაგალითად, შიგნით ჩაყარე: 
// "Bloodthorn", "Water", "Glowspore", შეურიე საერთო და უნიკალური ნივთები).

// დაწერე ფუნქცია createGuildStash(bag1, bag2), რომელიც დააბრუნებს 
// ახალ Set-ს — ორივე მოთამაშის ნივთების საერთო საცავს (დუბლიკატების გარეშე).

// ნაბიჯი 2: რეცეპტის შემოწმება (Subset / Superset)
// შექმენი Set სახელად healthPotionRecipe (მაგალითად, სჭირდება: "Water",
//  "Bloodthorn", "Crystal").

// დაწერე ფუნქცია canCraft(recipe, stash).

// ფუნქციამ უნდა შეამოწმოს, მოიპოვება თუ არა რეცეპტის ყველა ინგრედიენტი 
// გილდიის საცავში (ანუ არის თუ არა რეცეპტი საცავის ქვე-სიმრავლე). თუ მოიპოვება 
// — დააბრუნოს true, წინააღმდეგ შემთხვევაში — false.

// ნაბიჯი 3: რა გვაკლია? (Advanced Difference)
// თუ canCraft აბრუნებს false-ს, მოთამაშემ ზუსტად უნდა იცოდეს რა აკლია, რათა
//  მოსაძებნად წავიდეს.

// დაწერე ფუნქცია getMissingIngredients(recipe, stash), რომელიც დააბრუნებს ახალ 
// Set-ს მხოლოდ იმ ინგრედიენტებით, რომლებიც რეცეპტშია მოთხოვნილი, მაგრამ საცავში
//  არ გვაქვს.

// ნაბიჯი 4: ექსკლუზიური ვაჭრობა (Symmetric Difference)
// წარმოიდგინე, რომ მოთამაშეებს ერთმანეთში ნივთების გაცვლა უნდათ, მაგრამ აინტერესებ
// თ მხოლოდ ისეთი ნივთები, რაც ერთს აქვს და მეორეს არა.

// დაწერე ფუნქცია getTradeableItems(bag1, bag2), რომელიც დააბრუნებს ისეთ Set-ს, 
// სადაც მოხვდება ნივთები პირველი ჩანთიდან (რაც მეორეში არაა) პლუს ნივთები მეორე ჩანთიდან (რაც პირველში არაა).
// ნაბიჯი 5: ნაგვის გაფილტვრა (Array filtering with Set)
// მოთამაშემ ტყეში იპოვა ბევრი ნივთი, თუმცა ზოგიერთი უსარგებლოა:
// const gatheredLoot = ["Wood", "Rotten Flesh", "Bloodthorn", "Mud", "Wood"
// , "Crystal", "Mud"];

// შექმენი Set სახელად trashItems (შიგნით ჩაწერე "Rotten Flesh" და "Mud").

// დაწერე ფუნქცია cleanLoot(lootArray, trashSet), რომელიც გადაურბენს მოპოვებული ნივთების მასივს, ამოაგდებს ნაგავს (გამოიყენე Set.has() ოპერაციის სისწრაფისთვის) და დააბრუნებს მხოლოდ სუფთა, 
// უნიკალური სასარგებლო ნივთების Set-ს.


let player1Bag= new Set(["Bloodthorn","Water",'knife','leaf','gas'])
let player2Bag= new Set(["Bloodthorn","Water","Glowspore",'almond','paper'])

console.log(player1Bag)
console.log(player2Bag)

function createGuildStash(bag1, bag2){
   return new Set([...bag1, ...bag2])
}
let guildStash = createGuildStash(player1Bag, player2Bag)

let  healthPotionRecipe = new Set(["Water", "Bloodthorn", "Crystal"])

function canCraft(recipe, stash) {
    for (let ingredient of recipe) {
        if (!stash.has(ingredient)) {
            return false
        }
    }
    return true
}


let result = canCraft(healthPotionRecipe, guildStash)
console.log(result)


function getMissingIngredients(recipe, stash){
    let missing  =  new Set()
    for(let ingredient   of recipe){
        if(!stash.has(ingredient)){
            missing.add(ingredient)
        }
    }
    return missing
}

let missingIngridient=getMissingIngredients(healthPotionRecipe, guildStash)

console.log(missingIngridient)

function getTradeableItems(bag1, bag2){
    let tradingItems= new Set()
    for(let  item of  bag1){
        if(!bag2.has(item)){
            tradingItems.add(item)
        }
    }
     for(let  item of  bag2){
        if(!bag1.has(item)){
            tradingItems.add(item)
        }
    }
    return  tradingItems
}

let combined=getTradeableItems(player1Bag,player2Bag)

console.log(combined)

const gatheredLoot = ["Wood", "Rotten Flesh", "Bloodthorn", "Mud", "Wood", "Crystal", "Mud"]

let  trashItems = new Set(["Rotten Flesh", "Mud"])

function cleanLoot(lootArray, trashSet) {
    let nonTrashItems = new Set()
    
    for (let item of lootArray) {
        if (!trashSet.has(item)) {
            nonTrashItems.add(item)
        }
    }
    
    return nonTrashItems
}

let cleanedLoot = cleanLoot(gatheredLoot, trashItems)
console.log(cleanedLoot)