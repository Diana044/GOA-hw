
# 2) მომხმარებელს შემოატანინეთ ასაკი, გაარკვიეთ მას შეუძლია თუ არა მართვის მოწმობის აღება (17 წლის უნდა იყო მართვის მოწმობის აღება რომ შეგეძლოს). თუ შეუძლია უთხარით რომ ის დიდი ბიჭი ან გოგოა, თუ არა დაუპრინტეთ რომ მალე გაიზრდება.


user_age=int(input("Enter your age to see if you are old enough for a driver's license."))
if user_age>=17 and user_age<75:
    print("Congratulations, you meet the requirements and are eligible to apply for a driver's license.")
elif user_age>=75:
    print("You may need to meet additional health requirements to renew your driver's license.")
else:
    print("Unfortunately, you do not meet the required criteria to apply for a driver's license at this moment.")