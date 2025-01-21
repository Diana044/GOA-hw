# ; 2) გააკეთეთ Reverse List და გამოიყენეთ while loop. შემოაბრუნეთ ყველა რიცხვი ლისტში. ახსნა: [1, 2, 3, 4,  5] => [5, 4, 3, 2, 1]

list_1=[33,45,22,34,76]
list_2=[]
lenght = len(list_1)-1
while len(list_2)!=len(list_1):
    list_2.append(list_1[lenght])
    lenght = lenght - 1
print(list_1)
print(list_2)