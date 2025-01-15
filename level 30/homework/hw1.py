# 1) შექმენით ლისტი სადაც გექნებათ 1-10 ჩათვლით რიცხვები და დაპრინტეთ მხოლოდ ლუწი რიცხვები

evens_list=[1,2,3,4,5,6,7,8,9,10]
for i in range(len(evens_list)):
    if evens_list[i]%2==0:
        print(evens_list[i])