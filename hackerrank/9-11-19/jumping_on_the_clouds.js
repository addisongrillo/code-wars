function jumpingOnClouds(c) {
    let res=0
    let num=0
    while (num < c.length) {
        if(c[num+2] === 0){
            res+=1
            num = num+2
        }else if(c[num+1] === 0){
            res +=1
            num ++
        }else{
            break
        }
    }
    return res
}

console.log(jumpingOnClouds([0,0,0,0,1,0]))