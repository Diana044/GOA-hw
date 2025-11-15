// 4)გვერდზე გქონდეს სამი <p> ტეგი.
// JS-ით getElementsByTagName("p") გამოიტანე პირველი <p> და
// მისი textContent-ი შეცვალე --> "khachapuri" ით .გამოიყენე textCXontent

let pList=document.getElementsByTagName('p')
pList[0].textContent='khachapuri'
console.log(pList)