# 1)
# a = 5
# b = "10"
# result = a + b
# print("Result:", result)

# კოდი გამოიტანს ერორს დაწერეთ რატომ და ასევე ცალკე დაწერეთ სწორი ფორმა 


# შეცდომაა, რადგან ინტეჯერს ვერ მივუმატებთ სტრინგს.ანუ ტექსტს ვერ მივუმატებთ რიცხვს. 10 ინტეჯერია, მაგრამ ამ შემთხვევაში ჩასმულია ბრჭყალებში, ამიტომ პროგრამა აღიქვავს როგორც სტრინგს. ერორის გამოსწორება შეიძლება ან მრჭყალების მოხსნით, ან სტრინგის ინტეჯერად გადაქცევით.

#first way

a = 5
b = 10
result = a + b
print("Result:", result)

#second way

a = 5
b = "10"

b_type=int(b)

result = a + b_type
print("Result:", result)