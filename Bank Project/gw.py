balance=0
credit=0
is_running=True
import time

def creating_accaunt():
    print('აქაუნთის შექმნა')
    username = input("შექმენით ახალი სახელი:")
    password = input("შექმენით ახალი პაროლი:")
    repeat_password=input('გაიმეორეთ პაროლი:')
    
    while password!=repeat_password:
        print('პაროლები ერთმანეთს არ ემთხვევა!')
        repeat_password=input('გაიმეორეთ პაროლი:')
        
    print('აქაუნთი წარმატებით შეიქმნა!\nთქვენი სახელია:',username,'\nთქვენი პაროლია:', password)
    
def show_balance(balance):
    print('თქვენ ანგარიშზე არსებული თანხა შეადგენს',balance,'ლარს')
    
def deposit():
    amount_money = int(input('რამდენი ლარის შეტანა გნებავთ ანგარიშზე?: '))
    print('თქვენ ანგარიშზე არსებული თანხა შეადგენს',balance ,'ლარს')
    return amount_money

def withdraw(balance):
    print('თანხის გამოტანა ანგარიშიდან')
    amount = int(input("რა რაოდენობის თანხის გამოტანა გსურთ?: "))

    if amount > balance:
        print("!!!!!!!!!!!!!!!!") 
        print("ეს შეუძლებელია!") 
        print("!!!!!!!!!!!!!!!!") 
        return 0  
    elif amount < 0:
        print("!!!!!!!!!!!!!!!!") 
        print("ეს შეუძლებელია")
        print("!!!!!!!!!!!!!!!!") 
        return 0 
        
    return amount 

def taking_credit(credit, balance):
    print('აიღე სესხი 2 წუთში!')
    amount=int(input('რა რაოდენობის თანხა გნებავთ?'))
    credit-=amount
    balance+=amount
    print('თქვენ ანგარიშზე არსებული თანხა შეადგენს',balance ,'ლარს','\nთქვენი დავალიანება შეადგენს',credit ,'ლარს')
    return credit, balance

def covering_credit(credit, balance):
    print('სესხის დაფარვა')
    print('თქვენ ანგარიშზე არსებული თანხა შეადგენს',balance,'ლარს','\nთქვენი დავალიანება შეადგენს',credit ,'ლარს')
    what_amount=int(input('რა რაოდენობის თანხა გსურთ დაფაროთ'))
    if what_amount>balance:
        print('ანგარიშზე არ გაქვთ საკმარისი თანხა')
    elif balance>credit and what_amount>credit:
        print('მიუთითეთ სასურველი ოდენობის თანხა')
    else:
        credit+=what_amount
        balance-=what_amount
        print('თქვენ ანგარიშზე არსებული თანხა შეადგენს',balance ,'ლარს','\nთქვენი დავალიანება შეადგენს',credit ,'ლარს')
        
        return credit, balance



while is_running:
    print("================================")
    print('საბანკო პროგრამა')
    time.sleep(0.5)
    print('1.შექმენი აქაუნთი')
    time.sleep(0.5)
    print('2.ანგარიშზე არსებული თანხის ნახვა')
    time.sleep(0.5)
    print('3.გააკეთე დეპოზიტი')
    time.sleep(0.5)
    print('4.გამოიტანე თანხა')
    time.sleep(0.5)
    print('5.აიღე სესხი ყველაზე დაბალი პროცენტით ჩვენთან!')
    time.sleep(0.5)
    print('6.სესხის დაფარვა!!')
    time.sleep(0.5)
    print('7.გამოსვლა')
    time.sleep(0.5)
    print("================================")
    choice=input('ამოირჩიე (1-7)')
  
    
    if choice=='1':
        creating_accaunt()
    elif choice=='2':
        show_balance(balance)
    elif choice =='3':
        balance += deposit() 
    elif choice=='4':
        balance -= withdraw(balance)
    elif choice=='5':
        credit,balance=taking_credit(credit, balance)
    elif choice=='6':
        credit,balance=covering_credit(credit, balance)
    elif choice=='7':
        print('გმადლობთ რომ ისარგებლეთ ჩვენი ბანკით')
        rating=int(input('10 ბალიანი სისტემიდან რამდენად კმაყოფილი ხართ ჩვენით? '))
        if rating>=5:
            print('გმადლობთ დადებითი შეფასებისთვის, კარგ დღეს გისურვებთ!!')
        elif rating<5:
            comment=input('სამწუხაროა, დაგვიწერეთ კომენტარი და გავითვალისწინებთ ბრატ')
            print('გმადლობთ, მშვიდობიან დღეს გისურვებთ')
        is_running=False
    else:
        print('აირჩიე სასურველი ვარიანტი!')