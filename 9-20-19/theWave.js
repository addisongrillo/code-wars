function wave(str){
    let res=[]
    let i=0
    let n=str.toLowerCase()
    while (i<n.length){
      let x = n.split("")
      if (x[i].match(/[a-z]/))
        { x[i] = x[i].toUpperCase()
          res.push(x.join(""))
        }
      i++
      }
      return res
  }