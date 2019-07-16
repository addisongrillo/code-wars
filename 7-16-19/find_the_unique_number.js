// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let newArr=[]
    let doubles=[]
    for (i = 0; i < arr.length; i++){
        if (newArr.includes(arr[i]) === false){
            newArr.push(arr[i])
        }else{
            doubles.push(arr[i])
            }
        }
    for (i = 0; i < newArr.length; i++){
        if (doubles.includes(newArr[i]) === false){
            return newArr[i]
        }
    }
    }

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))