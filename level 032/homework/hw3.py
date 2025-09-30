# 3) გააკეთეთ Filter Even Numbers. მიზანი: გაფილტრეთ ყველრა ლუწი რიცხვი და ჩაამატეთ ახალ სიაში და შემდეგ ეგ სია დაპრინტეთ 

numbers=[1,2,4,5,7,9,8,10,26]
evens_list=[]
for i in range(len(numbers)):
    if numbers[i]%2==0:
        evens_list.append(numbers[i])

print(evens_list)
