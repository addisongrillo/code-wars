var values = [[2,4,6],[8,10,12],[14,16,18]];

function divideNumbers(numbers){
    let resArr=[]
    numbers.map(arr => {
        let nArr=[]
        arr.map(num => {
            nArr.push(num/2)
        })
        resArr.push(nArr)
    })
    return resArr
}

console.log(divideNumbers(values).toString());

// divideNumbers(values)