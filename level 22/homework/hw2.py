#     2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ რიცხვების საშუალო არითმეტიკული
average=0
num=int(input('enter number'))
for i in range(1, num+1):
    average=average+i
average1 = average/num
print(average1)