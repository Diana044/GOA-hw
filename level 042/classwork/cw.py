def whatday(num):
    weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    if num<8 and num>0:
        return weekday[num-1]
    else:
        return "Wrong, please enter a number between 1 and 7"
    
   


def get_size(w,h,d):
    return [2*w*h+2*h*d+2*w*d, w*h*d,]




def replace_exclamation(st):
    ok1 = st.replace('a', '!')
    ok2 = ok1.replace('e', '!')
    ok3 = ok2.replace('i','!')
    ok4 = ok3.replace('o', '!')
    ok5 = ok4.replace('u','!')
    ok6 = ok5.replace('A','!')
    ok7 = ok6.replace('E','!')
    ok8 = ok7.replace('I','!')
    ok9 = ok8.replace('O','!')
    ok10 = ok9.replace('U','!')
    return ok10


def replace_exclamation(st):
    ok1 = st.replace('a', '!')
    ok2 = ok1.replace('e', '!')
    ok3 = ok2.replace('i','!')
    ok4 = ok3.replace('o', '!')
    ok5 = ok4.replace('u','!')
    ok6 = ok5.replace('A','!')
    ok7 = ok6.replace('E','!')
    ok8 = ok7.replace('I','!')
    ok9 = ok8.replace('O','!')
    ok10 = ok9.replace('U','!')
    return ok10


def derive(coefficient, exponent): 
    return str(coefficient*exponent)+'x^'+str(exponent-1)