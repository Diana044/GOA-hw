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
    

# 4????

def array_diff(a, b):
    new_list=[]
    for i in a:
        if i not in b:
            new_list.append(i)    
    return new_list

