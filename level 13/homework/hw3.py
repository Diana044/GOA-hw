# 3) მომხმარებელს შემოატაინეთ თავისი სახელი, გვარი, ასაკი, და შემდეგ შეაერთეთ ისე რომ გამოვიდეს წინადადება.

questoin1=input('Hi, would you like to create a accaunt? (options: 1.yes 2.no)')
if questoin1 == "yes": 
    user_name=input('Ok,to create an accaunt, enter your name here :')
    user_surname=input('Enter your surnam here:')
    user_age=int(input('Enter your age here:'))
    if user_age >= 18:
        print('Your name is- ', user_name, 'your surname is-', user_surname, 'your age is-', user_age)
        print('Your accaunt has been succsesfully created!')

    elif user_age < 18:
        print('Sorry, you are too young!')

elif questoin1=='no':
    print('ok, hav a nice day')