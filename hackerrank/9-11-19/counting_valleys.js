function countingValleys(n, s) {
    let arr=s.split("")
    let x=0
    let y=0
    let v=0
    arr.map(d => {
        if (d === 'D'){
            x -= 1
        }else{
            x += 1
        }
        if(x === 0 && x>y){
            v += 1
        }
        y=x
        
    })
    return v
}

console.log(countingValleys(8, "UDDDUDUU"))