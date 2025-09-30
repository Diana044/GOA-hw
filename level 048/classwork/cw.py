def filter_list(l):
    fil_list=[]
    for i in l:
        if type(i) == int:
            fil_list.append(i)
    return fil_list


def find_short(s):
    splt=s.split(' ')
    new_list=[]
    for i in splt:
        new_list.append(len(i))


def find_short(s):
    splt=s.split(' ') 
    new_list=[] 
    for i in splt:
        new_list.append(len(i)) 
    min_lst=new_list[0]
    for i in new_list:
        if i<min_lst:
            min_lst=i
    return min_lst
            