def abbrev_name(name):
    x = name.split()
    string = ''
    for i in x:
        string+=i[0].upper()
    return '.'.join(string)



def is_isogram(string):
    string=string.lower()
    return len(set(string)) == len(string)

def vaporcode(s):
    s=s.replace(' ','').upper()
    rslt=' '
    for char in s:
        rslt+=char + "  "
    return rslt.strip()