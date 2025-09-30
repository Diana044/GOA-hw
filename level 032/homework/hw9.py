# 9)  გააკეთეთ While Loop. ეს loop-ი უნდა გაეშვას 50-ჯერ და ზუსტად 47 loop-ზე უნდა შეჩერდეს loop-ი, თითოეულ loop-ის დატრიალებაზე უნდა დაპრინტოს მერამდენე დატრიალება მოხდა ანუ: Loop 1 Loop 2 Loop 3 და ასე შემდეგ. მინიშნება: შექმენით Counter ცვლადი და მასში შეინახეთ 0 ციფრი ყოველ loop-ის დატრიალებაზე უნდა მოიმატოს ერთით.

counter=0
while True:
    counter=counter+1
    print('loop', counter)
    if counter==47:
        break
