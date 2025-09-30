# parametri
# argumenti

# def funct(parametri):
#     print('hi', parametri)
    
    
# funct('argumenti')

# level 36:
    # 1) შექმენით ფუნქცია რომელსაც ექნება ორი პარამეტრი ხოლო ამ ფუნქციამ უნდა გადაამრავლოს
    # ეს ორი რიცხვი ერთმანეთზე შემდეგ კი დაიბეჭდოს მიღებული ნარმავლი ლუწია თუ კენტი ნამრავლთან ერთად, 
    # გამოიძახეთ ეს ფუნქცია რამდენჯერმე და გადაეცით არგუმენტები(სვადასვა რიცხვები)

def multiply(num1,num2):
    answer=num1*num2
    if answer%2==0:
        print(answer,'is even')
    else:
        print(answer, 'is odd')
        
multiply(3,5)       
multiply(4,77)
multiply(22,4)
multiply(33232,4)