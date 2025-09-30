#4) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ მხოლოდ 5 ის ჯერადი რიცხვების ჯამი ცალკე და მხოლოდ 3ის ჯერადი რიცხვების ჯამი ცალკე, გამოიყენეთ while loop

user_num=int(input('enter num:'))

multiples_5=0
multiples_3=0

i=0


while i <user_num:
    if i%5==0:
        multiples_5=multiples_5+i
    elif i%3==0:
        multiples_3=multiples_3+i
    i = i + 1



print(multiples_5)
print(multiples_3)
    