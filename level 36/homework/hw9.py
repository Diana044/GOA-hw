# 9) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი თუ 18 ზე უთხრას რომ სრულწლოვანია თუარადა არარის

def age(user_age):
    if user_age>=18:
        print('you are adult')
    else:
        print('you are underage')
        
age(int(input('Enter your age')))