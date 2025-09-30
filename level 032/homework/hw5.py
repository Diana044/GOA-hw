# 5) გააკეთეთ Find Minimum და გამოიყენეთ for loop. მიზანი: სიაში უნდა იპოვოთ მინიმალური ინტეჯერი მაგალითად: [1, 546, 456 ,123] => [1]

nums=[3,56,34,1]
min_num=nums[0]
for i in nums:
    if i< min_num:
        min_num=i
print(min_num)