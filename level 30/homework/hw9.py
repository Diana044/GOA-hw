# 9) გამოიყენეთ append და pop რომ დაატრიალოთ ლისტი და დაპრინტეთ შემდეგ 

names_list=['diana','giorgi','ana','levani']
name_list2=['diana','giorgi','ana','levani']
while len(names_list) !=0:
    print(names_list)
    names_list.pop()
while len(names_list) !=4:
    for i in name_list2:
        names_list.append(i)
        print(names_list)