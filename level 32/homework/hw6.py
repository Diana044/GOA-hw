# 6) გააკეთეთ Filter Odd Numbers. მიზანი: გაფილტრეთ ყველრა კენტი რიცხვი და ჩაამატეთ ახალ სიაში და შემდეგ ეგ სია დაპრინტეთ

nums=[1,2,45,67,44,677]
odds_list=[]

for i in range(len(nums)):
    if nums[i]%2!=0:
        odds_list.append(nums[i])

print(odds_list)