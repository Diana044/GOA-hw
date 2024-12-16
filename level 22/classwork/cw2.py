# 2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი ერთიდან ამ რიცხვამდე დაბეჭდეთ მხოლოდ ლუწი რიცხვების ჯამი, გამოიყენეთ for loop

user_num=int(input('enter your number'))

sum=0

for i in range(user_num):
    if i%2==0:
        sum=sum+i
print(sum)