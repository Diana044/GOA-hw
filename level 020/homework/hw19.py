#19)შეიყვანეთ რიცხვი და დაბეჭდეთ ყველა რიცხვი, რომელიც არის 3-ზე მეტია, მაგრამ 10-ზე ნაკლები.

user = int(input("Pritn any number: "))
for i in range(user):
    if i >= 3 and i <=10:
        print(i)