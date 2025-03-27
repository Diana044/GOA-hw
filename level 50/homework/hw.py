

def no_space(x):
    res = ''
    for i in x:
        if i!=' ':
            res+=i
    return res


def reverse(st):
    final_str=""
    split_arr=st.split()
    split_arr.reverse()
    return " ".join(split_arr)


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
    return list

def remove_url_anchor(url):
    func = url.split('#')
    return func[0]


def small_enough(array, limit):
    for i in array:
        if i>limit:
            return False
    return True

def dont_give_me_five(start,end):
    new_list=[]
    for i in range(start, end+1):
        if "5" not in str(i):
            new_list.append(i)
    return len(new_list)



def array_diff(a, b):
    new_list=[]
    for i in a:
        if i not in b:
            new_list.append(i)    
    return new_list