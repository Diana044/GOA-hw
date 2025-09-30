def digitize(n):
    nums=[]
    nums1=[]
    for i in str(n):
        nums+=i
    for i in nums:
        nums1.append(int(i))
    return nums1[::-1]