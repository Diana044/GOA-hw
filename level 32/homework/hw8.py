# 8) გააკეთეთ Sum Of Odd Numbers. მიზანი: შეკრიბეთ ყველა კენტი რიცხვი და შეინახეთ სიაში შემდეგ ეგ სია დაპრინტეთ 10 ჯერ

nums=[1,2,3,4,55,33,66,34,636,]
n=0
for i in nums:
    if i%2!=0:
        n=n+i
for i in range(10):
    print(n)