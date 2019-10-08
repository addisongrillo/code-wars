// Write a function called that takes a string of parentheses, and determines 
// if the order of the parentheses is valid. The function should return true if the string is valid, 
// and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens){
    let i=0
    parens.split("").map(x => x==="(" ? i++ : i--)
    return(i===0 ? true:false)
  }

console.log(validParentheses("(()"))