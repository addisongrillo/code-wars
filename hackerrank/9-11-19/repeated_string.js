function repeatedString(s, n) {
    let res=0
    if((s.split('').filter(x => x === 'a')).join('') === ''){
        res=0
    }else if ((s.split('').filter(x => x === 'a')).join('') ===s){
        res=n
    }else{
    let x=0
    let y=0
    let st=""
    while (x<=n){
        st += s.split('')[y]
        if(y < (s.length-1)){
            y++
        }else{
            y=0
        }
        x++
    }
    st.split('').map(l => {
        if(l==='a'){
            res++
        }
    })}
    return res
}

console.log(repeatedString("a", 1000000000000))