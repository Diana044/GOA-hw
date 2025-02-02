#     10) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა რიცხვს

def numbers():
    nums=int(input('Enter number'))
    for i in range(nums):
        print(i)
        
numbers()