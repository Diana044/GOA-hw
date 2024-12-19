#     5) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ ყველა რიცხვის ნამრავლი
multiply=0
num=int(input('enter num'))
for i in range(1, num):
    multiply=multiply+i*i

print(multiply)