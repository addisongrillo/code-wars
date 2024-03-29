/* Challenge from friend, not from code wars

Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints: 

1. It must be at least 8 characters long
2. It must contain at least 1 capital letter
3. It must contain at least 1 lower case letter

Output true if the string is a valid password or false otherwise. 

Ex:
Input: RexTheDog
Output: true

Input: rexthedog
Output: false

Input: REXTHEDOG
Output: false

Input: Dog
Output: false */ 


function passValidate(input){
    if (input.length < 8){
        return false
    }else if(/[a-z]/.test(input) === false){
        return false
    }else if(/[A-Z]/.test(input) === false){
        return false
    }else{
        return true
    }
}

console.log(passValidate("RexTheDog"))