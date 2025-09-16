// 3)მომხმარებელს prompt–ით შეეკითხე რიცხვი.
// თუ რიცხვი > 0 → დაბეჭდე "დადებითია".
// თუ რიცხვი < 0 → დაბეჭდე "უარყოფითია".
// თუ 0 → დაბეჭდე "ნულია"

let userNum=Number(prompt('enter  number'))
if (userNum >0){
    console.log('დადებითია')
}else if (userNum<0){
    console.log('უარყოფითია')
}
else{
    console.log('ნულია')
}
