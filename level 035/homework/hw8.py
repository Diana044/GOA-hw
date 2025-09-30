#      8) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი დაბეჭდავს დადებითია თუ უარყოფითი

def positive_or_negative():
    num=int(input('enter number to find our wether its positive or negative'))
    if num>=0:
        print(num,'is a positive number')
    else:
        print(num,'is a negative number')
        
positive_or_negative()