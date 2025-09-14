// / 5)მომხმარებელს შემოატანინეთ რაიმე რიცხვი(მაგრამ ეს რიცხვია არ ვიცით სტრინგია თუ ნამბერი) შენი დავალებაა შეამოწმო თუ მომხმარებლის მიერ შემოტანილი რიცხვის ტიპი არის სტრინგი მაშინ დაუკონსოლლოგე რომ "you entered string number,so you are wrong" სხვა შემთხვევაში ანუ თუ მომხმარებელმა შემოიტანა რიცხხვი რომლის ტიპი არის number მაშინ დაატრიალეთ ფორ ციკლი 1 დან ამ რიცხვამდე და გამოიტანეთ ყველა კენტი რიცხვი კონსოლში(წინაზე ვისაუბრეთ ფუნქციაზე რომელიც იგებდა ელემენტის ტიპს,გაიხსენეთ თუა რადა მოიძიეთ,მე არ მომწეროთ არ დაგეხმარებით იჭყლიტეთ თავები ამ დავალებებზე,you will gain skill of looking up something by yourself <3 :D```
let userAnswer=prompt('chawere isNaN')
userAnswer = Number(userAnswer);


if (userAnswer > 0) {  
    for (let i = 1; i < userAnswer; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
} else {
    console.log("you entered string number, so you are wrong");
}



let userdd='dfsds'

