// 4)მომხმარებელს შეეკითხე ქულა (0–100).
// თუ ქულა < 50 → "ჩაიჭერი"
// თუ 50–69 → "საშუალო".
// თუ 70–89 → "კარგი".
// თუ 90–100 → "ძალიან კარგი".
// თუ სხვა რიცხვი შეიყვანა → "არასწორი მონაცემი".

let ponint=Number(prompt('enter point 0-100'))
if(Point <50){
    console.log("ჩაიჭერი")
}else if(point>50 && point<69){
    console.log('საშუალო')
}else if(point>70 && point<89 ){
    console.log("კარგი")
}else if (point>90 && point<100){
    console.log("ძალიან კარგი")
}else{
    console.log("არასწორი მონაცემი")
}