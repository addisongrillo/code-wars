function maximumToys(prices, k) {
    let res=0
    let p=[...prices]
    let l=prices.length
    let i=0
    while (i<l){
        let x = Math.min.apply(null, p)
        if (x <= k){
            k = k-x
            p.splice(p.indexOf(x), 1)
            res = res + 1
        }
        i++
    }
    return res
}

console.log(maximumToys([1,2,3,4],7))