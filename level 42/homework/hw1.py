def calculator(txt):
    dots1=len(txt.split(" ")[0])
    dots2=len(txt.split(" ")[2])
    if txt.split(" ")[1] =='+':
        result=dots1+dots2
    elif txt.split(" ")[1] =='-':
        result=dots1-dots2
    elif txt.split(" ")[1] == '*':
        result=dots1*dots2
    elif txt.split(" ")[1] == '//':
        result=dots1//dots2
        
        
    return result*'.'
        