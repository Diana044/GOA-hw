#3) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ კი დაბეჭდეთ ერთიდან ამ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამი ცალკე და მხოლოდ კენტი რიცვხების ჯამი ცალკე, გამოიყენეთ for loop

user_num=int(input('enter num:'))
evens_sum=0
odd_sum=0
for i in range(user_num):
    if i%2==0:
        evens_sum=evens_sum+i
    elif i%2!=0:
        odd_sum=odd_sum+i
print(evens_sum)
print(odd_sum)      
