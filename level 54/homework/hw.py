def add_length(str_):
    new_list=[]
    str1=str_.split()
    for i in str1:
        new_list.append(i+' ' +str(len(i)))
    return new_list

def get_size(w,h,d):
    return [2*w*h+2*h*d+2*w*d, w*h*d,]

def swap_values(args): 
    num=args[0]
    args[0] = args[1]
    args[1] = num
    
    return args



def merge_arrays(arr1, arr2):
    a=arr1+arr2
    new_list=[]
    for i in a:
        if i not in new_list:
            new_list.append(i)
            
    n = len(new_list)
    for i in range(n):
        for x in range(n - 1):
            if new_list[x] > new_list[x + 1]: 
                num = new_list[x]
                new_list[x] = new_list[x + 1]
                new_list[x + 1] = num

    return new_list