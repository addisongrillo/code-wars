function rotLeft(a, d) {
    let i = 0
    while (i < d){
        a.push(a[0])
        a.shift()
        i++
        }
    return a
}

console.log(rotLeft([1,2,3,4,5],1))