#      7) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი

def odd_or_even():
    print('Hello, here you can write any number and find out if its even or odd')
    user_num=int(input('Enter your number here'))
    if user_num%2==0:
        print(user_num,'is an even number')
    else:
        print(user_num,'is an odd number')

odd_or_even()