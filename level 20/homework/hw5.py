user = int(input("Print any number: "))
for i in range(user):
    if i % 2 == 0:
        print(str(i) + '.' + 'i love goa!')
    elif i % 2 != 0:
        print(str(i) + '.' + 'i love programming!')