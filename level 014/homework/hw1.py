# 1) თუ ასაკი არის 18 ის ზემოთ ან 50 წლის ქვემოთ  ან თუ  ასაკი  ნაკლებია 18 ზე და მეტია 50 ზე გამოტანეთ ის უნდა იყოს ან მოხუცი ან ახალგაზრდა


while True:
    user_age=int(input('Enter your age'))

    if user_age>=18 and user_age  <=50 :
        print('User is young')
    elif user_age <18:
        print('User is very young ')
    elif user_age >50 and user_age <=150:
        print("User is old")
    elif user_age>150:
        print('User is dead')


