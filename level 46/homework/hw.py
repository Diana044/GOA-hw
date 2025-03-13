def litres(time):
    return int(time*0.5)


def lovefunc( flower1, flower2 ):
    if flower1%2==0 and flower2%2!=0 or flower1%2!=0 and flower2%2==0:
        return True
    else:
        return False


def simple_multiplication(number) :
    if number%2==0:
        return number*8
    else:
        return number*9
    
#1
def invert(lst):
    new_lst=[]
    for i in lst:
        new_lst.append(-i)
    return new_lst
#2      
def invert(lst):
    new_list=[]
    for i in lst:
        new_list.append(-i)
    return new_list