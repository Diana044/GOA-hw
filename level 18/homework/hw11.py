#  11) მომხმარბელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ მხოლოდ კენტი რიცხვები

number=int(input('Enter number'))
for i in range(number):
    if i%2!=0:
        print(i)

