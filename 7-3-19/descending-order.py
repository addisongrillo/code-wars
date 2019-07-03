def Descending_Order(num):
    num = str(num)
    list = []
    for digit in map(int, num):
        list.append(digit)
    list.sort(reverse = True)
    s = [str(i) for i in list] 
    res = int("".join(s)) 
    return(res)
        
print(Descending_Order(123945))