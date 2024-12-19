
#5) დაწერეთ ციკლი რომელიც ლუწს გამოიტანს " მე მიყვარს გოა" და კენტს " მე მიყვარს პროგრამირება".
user = int(input("Print any number: "))
for i in range(user):
    if i % 2 == 0:
        print(str(i) + '.' + 'i love goa!')
    elif i % 2 != 0:
        print(str(i) + '.' + 'i love programming!')