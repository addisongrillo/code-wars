def makeList(x):
    y = []
    for digit in x:
        y.append(digit)
    return y

def maskify(cc):
    x = makeList(cc)
    y = len(x)-4
    i = 0
    while i < y:
        x[i] = "#"
        i += 1   
    return ''.join(x)
