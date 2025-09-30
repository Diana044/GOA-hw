def century(year):
    if str(year)[-1]=='0' and str(year)[-2]=='0':
        return int(year/100)
        
    return int(year/100+1)


