// 3)მომხმარებელს შემოატანინეთ რიცხვი,შემდეგ დაატრუალეთ ფორ ციკლი 1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე და იპოვე ამ რიცხვების საშუალო არითმეტიკული,შემდეგ შეამოწმეთ,თუ მიღებული საშვალო არის 20ზე მეტი და ლუწი,მაშინ დააკონსოლლოგე რომ "good mark" შემდეგ შეამოწმეთ თ რს მიღებული საშვალო არის 20 ზე ნაკლები და კენტი დაუკონსოლლოგეთ --> 'very bad mark"

function func(){
    let userNumber = Number(prompt('enter number'));
    let count = 0;
    let sum = 0;
    for(let i = 1; i <= userNumber; i++){ 
        sum += i;
        count++;
    }
    let average = sum / count;
    if(average > 20 && average % 2=== 0){
        console.log('good mark');
    } else if(average < 20 && average % 2 === 1){
        console.log('very bad mark');
    } else {
        console.log('wronk');
    }
}

func();
