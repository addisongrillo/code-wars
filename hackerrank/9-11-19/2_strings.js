function twoStrings(s1, s2) {
    let res = "NO"
    s1.split('').map(l => {
        if (s2.split('').includes(l)){
            res="YES"
        }
    })
    return res
}

console.log(twoStrings("hi","world"))