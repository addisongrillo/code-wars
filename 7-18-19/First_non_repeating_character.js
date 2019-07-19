// Write a function named first_non_repeating_letter that 
// takes a string input, and returns the first character that 
// is not repeated anywhere in the string.

// For example, if given the input 'stress', the function 
// should return 't', since the letter t only occurs once in 
// the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are 
// considered the same character, but the function should 
// return the correct case for the initial letter. For example, 
// the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should 
// return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    let nonRepeat = ''
    let newArr=[]
    let doubles=[]
    for (i = 0; i < s.length; i++){
        if (newArr.includes(s[i]) === false){
            newArr.push(s[i])
        }else{
            doubles.push(s[i])
            }
        }
    for (i = 0; i < newArr.length; i++){
        if ((doubles.includes(newArr[i].toLowerCase()) === false) && (doubles.includes(newArr[i].toUpperCase()) === false)){
            nonRepeat = newArr[i]
            break
        }
    }
    return nonRepeat
  }

console.log(firstNonRepeatingLetter("sells, stress"))