#      4) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ორ რიცხვს შემდეგ კი მათ გამოაკლებს ერთმანეთს 

def subtaction():
    user_name=input('enter your name here')
    print('Hello', user_name,',', 'enter two random numbers in order to subtact them' )
    num1=int(input('Enter first number'))
    num2=int(input('Enter second number'))
    print(num1, '-' ,num2, '=', num1-num2)
    
    
subtaction()