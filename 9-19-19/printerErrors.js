function printerError(s) {
    let x=s.split('').length
    let y=0
   let i=0
   while (i<x){
       if (/[n-z]/.test(s.split('')[i]))
           {y+=1}
     i++
       }
   return `${y}/${x}`
}