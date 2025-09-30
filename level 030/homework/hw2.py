# 2) შექმენით ლისტი სადაც გექნებათ 1-10 ჩათვლით რიცხვები და დაპრინტეტ მოლოდ კენტი რიცხვები

odds_list=[1,2,3,4,5,6,7,8,9,10]
for i in range(len(odds_list)):
    if odds_list[i]%2!=0:
        print(odds_list[i])
