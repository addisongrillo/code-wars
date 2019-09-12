function countSwaps(a) {
    let sw=0
    let n=a.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                let x = a[j]
                a[j] = a[j+1]
                a[j+1] = x
                sw = sw+1
            }
        }
        
    }
    let f=a[0]
    let l=a[a.length-1]
    console.log(`Array is sorted in ${sw} swaps.`)
    console.log(`First Element: ${f}`)
    console.log(`Last Element: ${l}`)
}

countSwaps([3, 2, 1])