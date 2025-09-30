# 1) შექმენით ფუნქცია რომელსაც გადაეცემა 2 პარამეტრი, a და b. თუ a პარამეტრი ლუწია მაშინ ის გაყეთ 2-ზე სხვა შემთხვევაში კი დაუმატეთ ერთი, საბოლოოდ კი დააბრუნეთ a - b. შემდეგ გამოიძახეთ ეს ფუნქცია მინიმუმ ერთხელ და კომენტარებით ახსენით რა არის return keyword

def operations(a,b):
    if a%2==0:
        a=a//2
    else:
        a=a+1
        
    return a-b

print(operations(10,2))
print(operations(9,2))


# return keyword abrunebs mnishvnelobas

word='LOrem'
print(word.lower())
print(word.upper())


