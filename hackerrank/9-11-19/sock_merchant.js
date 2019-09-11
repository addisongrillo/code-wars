function sockMerchant(n, ar) {
    let res=0
    let i=0
    let j=[]
    while (i < n){
        if(j.includes(ar[i]) === false){
            j.push(ar[i])
        }
        i++
    }
    let k=0
    while (k < j.length){
        let x = 0
        let l=0
        while(l < n){
            if (j[k] === ar[l]){
                x += 1
            }
            l++
        }
        if(x % 2 === 0){
            res += (x/2)
        }else{
            res += ((x-1)/2)
        }
        k++
    }
    return res
}

console.log(sockMerchant(7, [1,2,1,1,2,4,4]))