# 4) გააკეთეთ Find Maximum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მაქსიმუმი ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [546]

numbers_list=[23,678,34,225]
biggest_num = numbers_list[0]
for i in numbers_list:
    if i >biggest_num:
        biggest_num=i
print(biggest_num)
print(max(numbers_list))




