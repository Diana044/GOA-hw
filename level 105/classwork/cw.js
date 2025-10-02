// 1მომხმარებელს შემოატანინეთ რიცხვი,1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე დაატრიალეთ ლუპი და ჩაამატეთ ეს როცხვები სიაშ,შემდეგ ამ სიიდან დაბეჭდეთ მხოლოდ ლუწი რიცხვები
 

let userNum=Number(prompt('enter number losr'))
let numbersList=[]
let evensList=[]
let i=1
while(i<=userNum){
    numbersList.push(i)
    i++
}
for(num=0;num<numbersList.length;num++){
    if(numbersList[num]%2==0){
        console.log('luwi ricxvebi', numbersList[num])
        evensList.push(numbersList[num])
    }
}


console.log(evensList)