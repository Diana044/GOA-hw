def whatday(num):
    weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    if num<8 and num>0:
        return weekday[num-1]
    else:
        return "Wrong, please enter a number between 1 and 7"
    
   


def get_size(w,h,d):
    return [2*w*h+2*h*d+2*w*d, w*h*d,]