#      8) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი დაბეჭდავს ეს რიცხვი დადებითია თუ უარყოფითი

def pos_or_neg(user_number):
    if user_number>0:
        print(user_number,'is positive')
    elif user_number<0:
        print(user_number,'is negative')
    else:
        print(user_number,'is equal to 0')
        
        
pos_or_neg(int(input('enter number')))
