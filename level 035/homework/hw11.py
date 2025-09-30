#     11) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა ლუწ რიცხვს

def evens():
    num=int(input('enter number'))
    for i in range(1,num):
        if i%2==0:
            print(i)
            
evens()