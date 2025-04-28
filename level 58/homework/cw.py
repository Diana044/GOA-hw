def capitals(word):
    index=[]
    for i in range(len(word)):
        if word[i].isupper():
            index.append(i)
    return index


def capitalize(s):
    even=''
    odd=''
    for i in range(len(s)):
        if i%2==0:
            even+=s[i].upper()
            odd+=s[i] 
        else:
            odd+=s[i].upper()
            even+=s[i]
            

    return [even, odd]