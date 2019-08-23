def carParking(n, available)
    ans=[]
    r=[]
    for row in available do
        x = 0
        for spot in row do
            x += spot
        end
        r.push(x)
    end
    sr = r.index(r.min)
    ans.push(sr + 1)
    for s in available[sr]
        if s === 0
            ans.push(available[sr].index(s) + 1)
            break
        end
    end
    if ans.length === 1
        p [0,0]
    else
        p ans
    end
end


# a = [[1,1,1,0,0],[1,1,1,1,0],[1,1,0,0,0],[1,1,1,0,0],[1,0,0,0,0]]
a = [[1,1,1]]

carParking(5, a)