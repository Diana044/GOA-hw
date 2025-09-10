
console.log('diana dzukaevi')
// 2)კომენტარის სახით ჩამოწერეთ რამდენი გზით შეგვიძლია რომ შევქმნათ ცვვლადები და ჩამოწერე რა განსხვავებაა მათ შორის
// სამი  გზით: var ,let, const.  var შედარებით ძველი მეთოდია რომელსაც დღესდღეობით იშვიათდ თუ გამოვიყენებთ პრაქტიკაში, ცვლადს ნებუისმიერ დროს შეგვიძლია შევუცვალოთ მუინიჭბული მნიშვნელობა.(reassign) let თანამედროვე მეთოდია,  also possible to reassign  the assigned value. const  აუცილებლად უჰნდა მიენიჭოს მნიშვნელობა ცვლადის შექმნისთანავე. ამ მნიშვნელობას ვერ შევძვლოთ.

// 3)შექმენი 15 ცვლადი და მიანიჭეთ თქვენთვის სასურველი მნიშვნელობები,5 ცვლადი შექმენით პირველი გზით ,5 ცვლადი შექმენით მეორე გზით და 5 შექმენით მესამე გზით,ანუ უნდა გამოიყენოთ ცვლადის შექმნის სამივე გზა და მოიყვანოთ ხუთ ხუთი მაგალითი
var nama = "Diana";
var ageVar = 18;
var cityVar = "Tbilisi";
var schoolVar = "GOA";
var petVar = "cat";

let nameLet = "Diana";
let ageLet = 18;
let country = "Georgia";
let schoolLet = "GOA";
let petLet = "cat";
let cityLet = "Qutaisi";

const ageConst = 18;
const surname = "dzukaevi";
const numberConst = 933.4;
const cityConst = "Qutaisi";
const subject = "math";

console.log(nama, ageVar, cityVar, schoolVar, petVar);
console.log(nameLet, ageLet, country, schoolLet, petLet, cityLet);
console.log(ageConst, surname, numberConst, cityConst, subject);


// let id1=Symbol('dd')
// let id2=Symbol('dd')
// console.log(id1==id2)

// 3)კომენტარის სახით ჩამოწერეთ თუ რომელი მონაცემთა ტიპები(data type) გვაქვს ჯავასკრიპტში და მოიყვანეთ ყველა მათგანზე მაგალითები
// number 
let num1=(12+211)
console.log(num1)

// string

let birthname=('giorgi')
console.log(birthname)

// Boolean
let isstudying=true
console.log(isstudying)

// Undefinned
 let x;
 console.log(x)

//  Null
let y=-null;
console.log(y)

// symbol
let username1=Symbol('user11')
let username2=Symbol('user11')
console.log(username1 == username2)

// object
let me={name1:'Diana', age1:18, city1:'Tbilisi'}
console.log(me)


// 4)შექმენით 9 ცვლადი let ის გამოყენებით,3 ცვლადში შეინახეთ ...(ნასწავლი 1) ტიპის მონაცემი,3 ცვლადში შეინახეთ  ...(ნასწავლი 2) ტიპის მონაცემი და სამ ცვლადში შეინახეთ ...(ნასწავლი 3) ტიპის მონაცემი.consol.log()ის დახმარებით დააკონსოლოგეთ 9 ვე ცვლადი და გამოიტანეთ კონსოლში 9 ვე ცვლადში შენახული მნიშვნელობა:
// მაგ:
// let name = "goga"
// console.log(name) --> გამოგვიტანს კონსოლში name ცვლადში შენახულ მნიშვნელობას ანუ "goga" - ს

let numm=9122;
numm=2323;
let dec=22.3;
let year=2025;

let village='kakheti';
let village2='tusheti';
let village3='Svaneti';

let haspet  = true;
let hascat= true;
let isplaying=false;

console.log(numm)
console.log(dec)
console.log(year)
console.log(village)
console.log(village2)
console.log(village3)
console.log(haspet)
console.log(hascat)
console.log(isplaying)

// 5)შექმენი 3 ცვლადი,პირველში შეინახე ...(ნასწავლი 1) ტიპის მოანცემი მეორეში შეინახე ...(ნასწავლი 2) ტიპის მონაცემი და მესამეში შეინახე ...(ნასწავლი 3) ტიპის მონაცემი,თქვენი დავალებაა კონსოლში გამოიტანოთ ამ  ცვლადებში შენახული მნიშვნელობების ტიპები 
// hint:გამოიყენეთ typeof ... ფუნქცია
const color='red';
const shoesize=49;
const iseef=true;
console.log(typeof(color))
console.log(typeof(shoesize))
console.log(typeof(iseef))
// 6)კომენტარის სახით ჩამოწერეთ რომელი მათემატიკური ოპერატორები გვაქვს javaScript ში და თითეულზე მოიყვანეთ თქვენთვის სასურველი მაგალითები,თითოეულზე 5 მაგალითი
// addition 

console.log(44+44+3+3+3+3+3+333333333333333333333333333333333333333343645645670000000000000000000000000009999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999);
console.log(10 + 20);
console.log(7 + 0);
console.log(-5 + 10);
console.log(2 + 3 + 4);

// substraction
console.log(343243-342234343)
console.log(-22-22)
console.log(3434-34-443-444)
console.log(33-33-33-33-33-33-33)
console.log(-43+33)


// Multiplication
console.log(5434 * 33);
console.log(1330 * 233);
console.log(-4 * 5);
console.log(0 * 100);
console.log(233 * 3323 * 234);

// Division
console.log(130 / 2);
console.log(20 / 5);
console.log(-15 / 3);
console.log(70 / 2);
console.log(0 / 5);
// nashti
console.log(10%2)
console.log(323233%2)
console.log(2%2.22)
console.log(2/2%2.224)
console.log(21%4)
// axarisxeba
console.log(2**3, 3235**22, 122231230**0, 3**4, (-2)**3);

// 7)შექმენით 5 ცვლადი camelCase ის გამოყენებით და შეინახეთ 5 ივე ცვლადში number ტიპის მონაცემი
let userAge=140;
let userWeight=6666666;
let userBMI=560.3;
let userBirthYear=600;
let userFamilyMembersTotalCount=0;
console.log('userAge:',userAge,"userWeight:", userWeight, "userBMI:" ,userBMI,  "userBirthYear:" ,userBirthYear ,  ":" ,userFamilyMembersTotalCount)
// 8)მომხმარებელს შემოატანინეთ თქვენი სახელი,გვარი,ასაკი,საცხოვრებელი ადგილი,დაბადების თარიღი(წლებში),სიმაღლე ,წონა და შეინახეთ ცვლადებში ,გამოიყენეთ prompt ფუნქცია,
let UserFirstName = prompt('Enter your name:');
let UserLastName = prompt("Enter your last name:");
let userAge1 = Number(prompt("Enter your age:"));
let livingPlace = prompt("Enter your living location:");
let birthYear = Number(prompt("Enter your birth year:"));
let height = Number(prompt("Enter your height in cm:")); 
let weight = Number(prompt("Enter your weight in kg:"));

console.log(UserFirstName, UserLastName, userAge1, livingPlace, birthYear, height, weight);


// 9)alert() ის გამოყენებით გამოიტანეთ თქვენთვის სასურველი ტექსტი,მოიყვანეთ alert() ის 10 მაგალითი
let alert1=alert('stupid')
let alert2=alert('alert!!! არავის არ აკლდეს არცერთი დავალება შემდეგისთვის!!!!! ')
let alert3=alert('sdasdasd')
let alert4=alert('sdasdasd')
let alert5=alert('sdasdasd')
let alert6=alert('sdasdasd')
let alert7=alert('sdasdasd')
let alert8=alert('sdasdasd')
let alert9=alert('sdasdasd')
let alert10=alert('sdasdasd')

// alert!!! არავის არ აკლდეს არცერთი დავალება შემდეგისთვის!!!!! უყურეთ ჩანაწერს აუცილებლად








