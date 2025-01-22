# Boss Level: გახსენით მაღაზია სახელად PC Parts, სადაც შეგიძლიათ შეიძინოთ სხვადასხვა კომპიუტერული ნაწილი მაგალითად: პროცესორები, ვიდეო ბარათები, ოპერატიული მეხსიერება, კვების ბლოკები, კორპუსები და სხვა. თითოეულ პროდუქტს მიანიჭეთ შესაბამისი ფასი. საბოლოოდ, დაპრინტეთ ჩეკი, სადაც ჩამოთვლილი იქნება შეძენილი ნივთები და ჯამური თანხა. 

user_items=[]
total_price=[]

user_name=input('enter your name')
print('hi', user_name,'this is PC Parts shop. Here you can purchase:')
print('1.cpus')
print('2.GPU ')
print('3.Motherboard')
print('4.RAM')
print('5.Storage')
print('6.Operating System and etc')
user_interest=input(('which product are you interested in? (Choose by number)'))
# first product
if user_interest== '1':
    print('CPU,Purpose-Executes instructions for programs and games, acting as the brain of the computer.')
    print('product1: AMD Ryzen 5 5600X ($200).')
    print('product2: Intel Core i7-12700K ($400)')
    print('Price range: $100 - $700+')
    chosen_cpu=input('Choose which cpu would you like to purchase (example:product1)')
    if chosen_cpu== 'product1':
        user_items.append(chosen_cpu)
        print(' AMD Ryzen 5 5600X ($200)- has been successfully added to shoppig list')
        continue_shopping=input('would you like to add more products or leave(add or leave)')
        if continue_shopping=='add':
                chosen_cpu=input('Choose which cpu would you like to purchase (example:product1)')
        elif chosen_cpu=='product2':
            user_items.append(chosen_cpu)
            print('Intel Core i7-12700K ($400)-has been successfully added to shoppig list')







