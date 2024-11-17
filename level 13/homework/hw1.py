# 1 ) მომხმარებელს შემოატაინეთ ორი რიცხვი და მათზე მოახდინეთ მათემატიკური ოპერაციები.

#1
bot= input('hi, lets canculate average of your familiy ages')

user_age=int(input('Enter your age'))
parent_age=int(input('Enter your parents age'))
sibilings_age=int(input('Enter your sibilings age'))

numbers_sum=user_age + parent_age + sibilings_age
average=numbers_sum / 3

print("The sum is equal to:", numbers_sum , "amd Average is equal to:",  average)
#2
math=input('Ok, now lets do some math operations ')
num1=int(input('Enter first random number'))
num2=int(input('Enter second random number'))

multiply=num1 * num2
substraction= num1 - num2
addition= num2 + num1
 
print('The multplation answer is:', multiply , 'The sunbstraction answewr is:', substraction , 'The addition answer is' , addition)