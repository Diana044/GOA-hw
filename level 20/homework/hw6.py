
#6)დაბეჭდე რიცხვები 1-დან 30-მდე, და გვერდით მიუწერე "ლუწია" თუ "კენტია".
for i in range(1, 31):
    if i % 2 == 0:
        print(str(i) + ' ' + 'is evem')
    else:
        print(str(i) + ' ' + 'is odd')