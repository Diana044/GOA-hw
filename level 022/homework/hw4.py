#     4) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ ყველა რიცხვის ორზე ნამრავლების ჯამი
addition=0
num=int(input('enter num'))
for i in range(1, num+1):
    addition=addition+i*2
print(addition)
