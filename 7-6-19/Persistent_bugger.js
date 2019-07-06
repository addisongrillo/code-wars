// Write a function, persistence, that takes in a positive parameter num 
// and returns its multiplicative persistence, which is the number of 
// times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let count = 0
    function multiply (array) {
        var sum=1;
        for (var i=0; i<array.length; i++) {
            sum = sum * array[i];
        } 
        return sum;
    }
    function innerFunc(newNum){
        let digits = (""+num).split("");
        num = multiply(digits)
            count += 1
    }
        while (num.toString().length !== 1)
        {
            let newNum = num
            innerFunc(newNum)

        }
    return count
 }