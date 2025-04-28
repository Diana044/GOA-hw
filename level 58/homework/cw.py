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

def is_pangram(st):
    
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    
    st = st.upper()
    for char in alphabet:
        if char not in st:
            return False
    
    return True


# 2) ახსენით რა არის transition და რისთვის ვიყენებთ. განმარტეთ თითოეული ქვე-კუთვნილება: transition-duration, transition-property, transition-timing-function
#transition propertyt vakonkretebt tu romeli css propertystvis aris gawerili efeqti
# transition-durationit vwert tu ramdeni wamis an miliwamis ganmavlobashui unda xdebodes qmedeba tu efeqti elementze ,
#  transition-timing-function- efeqtis sichqare