function calcAvgHeight(data) {
    if ((Object.values(data).length) >= 1){
        let hArr=[]
        let sum=0
        for (i = 0; i < Object.values(data).length; i++){
            hArr.push((Object.values(Object.values(data)[i]))[0])
        }
        for (j = 0; j < hArr.length; j++) {
            sum += hArr[j]
          }
          return sum/(hArr.length)
    }else{
        return null
    }
  }
  
  var avgHeight = calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 }
  });
  console.log(avgHeight);