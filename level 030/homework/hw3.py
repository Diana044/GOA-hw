# 3) შექმენით ლისტი სადაც გექნებათ 1-10 ჩათვლით რიცხვები, დაპრინტეთ ყველა რიცხვი მაგრამ მიუწერეთ რომელია კენტი და რომელია ლუწი

num_list=[1,2,3,4,5,6,7,8,9,10]
for i in range(len(num_list)):
    if num_list[i]%2==0:
        print(num_list[i],'number is even')
    else:
        print(num_list[i],'number is odd')