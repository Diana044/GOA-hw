# Boss Level: გახსენით მაღაზია სახელად PC Parts, სადაც შეგიძლიათ შეიძინოთ სხვადასხვა კომპიუტერული ნაწილი მაგალითად: პროცესორები, ვიდეო ბარათები, ოპერატიული მეხსიერება, კვების ბლოკები, კორპუსები და სხვა. თითოეულ პროდუქტს მიანიჭეთ შესაბამისი ფასი. საბოლოოდ, დაპრინტეთ ჩეკი, სადაც ჩამოთვლილი იქნება შეძენილი ნივთები და ჯამური თანხა.

user_items = []
total_price = []


user_name = input("enter your name")
print("hi", user_name, "this is PC Parts shop. Here you can purchase:")
print("1.Intel Core i7-12700K ($400)")
print("2.GPU,NVIDIA GeForce RTX 3070 ($500) ")
print("3.Motherboard, ASUS ROG Strix Z590-E (Intel, $300)")
print("4.RAM, Corsair Vengeance LPX 64GB (4x16GB, DDR4 3200MHz) ($250)")
print("5.Storage")

while True:
    user_interest = input(("which product are you interested in? (Choose by number)"))
 
    if user_interest == "1":
        user_items.append("Intel Core i7-12700K ($400)")
        total_price.append(400)
        print(
            " Intel Core i7-12700K ($400)- has been successfully added to shoppig list"
        )
    elif user_interest == "2":
        user_items.append("NVIDIA GeForce RTX 3070")
        total_price.append(500)
        print(
            "GPU,NVIDIA GeForce RTX 3070 ($500)- has been successfully added to shoppig list "
        )
    elif user_interest == "3":
        user_items.append(
            " ASUS ROG Strix Z590-E- has been successfully added to shoppig list"
        )
        total_price.append(300)
        print(
            "Motherboard, ASUS ROG Strix Z590-E (Intel, $300)- has been successfully added to soppig list"
        )
    elif user_interest == "4":
        user_items.append("Corsair Vengeance LPX 64GB ")
        total_price.append(250)
        print(
            " Corsair Vengeance LPX 64GB (4x16GB, DDR4 3200MHz) ($250)- has been successfully added to shoppig list"
        )
    elif user_interest == "5":
        user_items.append("Storage(100$)")
        total_price.append(100)
        print("Storage- has been successfully added to shoppig list")
    else:
        print("wrong choise, select a product or type leave")

    continue_shopping = input(
        "Would you like to add more products or leave? (add/leave): "
    )
    if continue_shopping == "leave":
        break

    print("--Receipt---")
    for item in user_items:
        print(item)

    total_amount = sum(total_price)
    print(f"Total amount: ${total_amount}")


