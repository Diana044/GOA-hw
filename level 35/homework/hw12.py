#     12) შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ კი ერთიდან იმ რიცხვამდე დაბეჭდავს ყველა კენტ რიცხვს

def odds():
    number=int(input('enter number'))
    for ricxvebi in range(number):
        if ricxvebi%2!=0:
            print(ricxvebi)
            
odds()