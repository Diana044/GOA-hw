# 8) შექმენით shopping სია სადაც მომხმარებელს შეეძლება რამე ნებისმიერი პროუქტის დამატება
#  და წაშლა, როდესაც მორჩებიან შოპინგს დაუპრინტეთ საბოლოოდ რა შეიძინეს 

shopping_list=[]
still_shopping=True
while still_shopping:
    answer=input('would you like to add product or delete it(if you want to quit shoppinh, enter end) ')
    if answer=='add':
        product=input('enter your products')
        shopping_list.append(product)
    elif answer=='delete':
        delete_product=input('which product would you like to delete')
        shopping_list.remove(delete_product)
    
    elif answer=='end':
        still_shopping=False

print(shopping_list)




