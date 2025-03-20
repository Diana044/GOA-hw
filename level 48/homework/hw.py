def disemvowel(string_):
    for i in "aeiouAEIOU":
        string_=string_.replace(i, '')
    return string_


def no_space(x):
    return x.replace(' ', '')

def no_space(x):
    res = ''
    for i in x:
        if i!=' ':
            res+=i
    return res
 
 
 
 
 
 
 
def reverse(st):
    st=st.split() 
    st.reverse()
    return " ".join(st)
  
  
  
def add_length(str_):
    new_list=[]
    str1=str_.split()
    for i in str1:
        new_list.append(i+' ' +str(len(i)))
    return new_list


def move_zeros(lst):
    list1=[]
    for i in lst:
        if i!=0:
            list1.append(i)
    for x in lst:
        if x==0:
            list1.append(x)
    return list1