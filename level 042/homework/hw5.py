def find_smallest_int(arr):
    ind=arr[0]
    for num in arr:
        if num<ind:
            ind=num
    return ind
        