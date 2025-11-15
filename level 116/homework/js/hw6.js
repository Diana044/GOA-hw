// 6)გვერდზე იყოს ორი <p>.
// JS-ით გაცვალე ერთმანეთის textContent-ები
// (პირველის ტექსტი გახდეს მეორის და პირიქით).

let pTags=document.getElementsByTagName('p')

let first=pTags[0]
let second=pTags[1]

let swap=first.textContent
first.textContent=second.textContent
second.textContent=swap

