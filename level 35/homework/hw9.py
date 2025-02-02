# #      9) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება ასაკს თუ მისი ასაკი მეტია 18 ზე უთხრას რომ სრულწლოვანია თუარადა არარის

def age():
    user_name=input('Enter your name')
    print('Hello', user_name,'in order to play this game, you will have to meet our age limit')
    user_age=int(input('Enter your age here to find out!'))
    if user_age>=18:
        print('You do fit in our age limits. Welcome', user_name)
    else:
        print('Unfortunately,dd you  cant play this game')
        
age()