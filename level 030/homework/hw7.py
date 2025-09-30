# 7) დაიწყეთ რიცხვების სიით, გამოიყენეთ while loop რომ წაშალოთ ყველა რიცხვი ამ სიიდან
#  და გამოიყენეთ pop რო დაპრინტოთ ეს ყველა ელემენტი სანამ ლისტი არ დაცარიელდება 

numbers=[1,2,3,4,5,6,7]

while len(numbers)!=0:
    numbers.pop()
    print(numbers)

name_list=['diana','ani','gio','grrgr']
print(len(name_list))