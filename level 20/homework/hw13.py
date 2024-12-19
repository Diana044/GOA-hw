#13)შეიყვანეთ რიცხვი და დაბეჭდეთ ყველა რიცხვი, რომელიც ნაკლებია ან გათანაბრებულია 10-თან.


user = int(input('Print any number: '))
for i in range(user+1):
    if i <= 10:
        print(i)