def check_exam(arr1,arr2):
    result=0
    for i in range(4):
        if arr2[i] == arr1[i]:
            result=result+4
        elif arr2[i] =='':
            result=result+0
        elif arr2[i]!=arr1[i]:
            result=result-1

    if result<0:
        return 0
    
    
    
    
def remove(s):
    if len(s)!=0:
        if s[-1] == '!':
            return s[0:-1]
        else:
            return s
    else:
        return s
    
    

