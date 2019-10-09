// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. 
// For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 +

function expandedForm(num) {
    let l = num.toString().split("").length
    let n = num.toString().split("")
    let res=""
    let x=0
    let y=l
    while (x<l){
        if (n[x] != "0"){
            res += n[x]
            Array.from({ length: y-1 }).forEach(() => {
                res += "0"
              })
        }
        if (y>1 && n[x+1] != "0"){
            res += " + "
          }
        y--
        x++
    }
    return res
  }


console.log(expandedForm(1203))