    #  6) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება ორი პარატემტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვები შემდეგ კი დაბეჭდავს მათ განაყოფს

def divison(num1,num2):
    answer=num1/num2
    print(num1,'/',num2,'=',answer)
    
divison(int(input('enter first number')),int(input('enter second number')))