function oddNumbers(l, r) {
    let arr = []
    for (let x = l; x <= r; x++) {
        arr.push(x)
    }
    let newArr = arr.filter(num => num % 2 !== 0)
    return newArr
}

console.log(oddNumbers(2,5))