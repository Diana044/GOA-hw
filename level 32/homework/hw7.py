# 7) გააკეთეთ Sum Of Even Numbers. მიზანი: შეკრიბეთ ყველა ლუწი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

numbers=[12,3,4,566,78,99,65,44]
n=0
for i in numbers:
    if i%2==0:
        n=n+i
for i in range(10):
    print(n)