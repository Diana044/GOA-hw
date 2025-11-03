// 2)შექმენით ობიექტი ,სადაც გექნებათ თავიდან 3 property(თქვენ რაზეც გინდათ) , ამის შემდეგ ამ ობიექტში დაამატეთ კიდევ 2 property ,(დააკონსოლლოგეთ ობიექტი რომ ნახოთ ჩაემატა თუ არა) ,ამის შემდეგ ამოშალეთ ობიექტიდან თავიდან თქვენს მოერ შექმნილი 3 property და დატოვეთ მხოლოდ ჩამატებულები, დააკონსოლლოგეთ ობიექტი რომ ნახოთ შედეგი ამოიშალა თუ არა  

let country={
    name : 'Georgia',
    capitalCity: 'Tbilisi',
    Language: 'Georgian',
}

country.city='Qutaisi'
country.Religion='cristian'
console.log(country)

delete country.name
delete country.capitalCity
delete country.Language


console.log(country)

let values=country.value