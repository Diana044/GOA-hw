#      7) მომხმარებელს შეეკითხეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელსაც ექნება პარამეტრი რომელსაც არგუმენტად გადაეცემა მომხლარებლის შემოტანილი რიცხვი შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი

def even_or_odd(user_number):
    if user_number%2==0:
        print(user_number,'is even')
    else:
        print(user_number,'is odd')

even_or_odd(int(input('Enter number to find out if its even or odd')))