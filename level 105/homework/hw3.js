// 3)შექმენი ფუქნცია რომელიც იღებს მოსწავლეების სიას,შენი დავალებაა რომ გაიგო --> თუ რომელიმე მოსწავლის სახელი იწყება ასო 'გ' ზე მაშინ ასეთი მოსწავლის სახელი შეცვალეთ false მნიშვნელობი


function stList(studentsList){ 
    for(let i=0; i< studentsList.length; i++){
        if (studentsList[i][0] === 'გ'){
            studentsList[i]=false
        }
    }return studentsList
}

console.log(stList(['ფოჩა','გოჩა','სალი', 'გიო', 'ანანო']))