 /* 
Write a function that takes in an array of integers and the array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5] 
*/ 

function findUniq(arr) {
        let newArr=[]
        for (i = 0; i < arr.length; i++){
            if (newArr.includes(arr[i]) === false){
                newArr.push(arr[i])
            }
        }
        return newArr
    }

console.log(findUniq([4,5,4,4,7,5]))