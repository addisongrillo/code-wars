function ChangeMaker(price, payment) {
    const coins = [0.25, 0.10, 0.05, 0.01]
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)
    const psum = arrSum(payment)
    const diff = parseFloat((psum-price).toFixed(2))
    let res = [0,0,0,0]
    let amount = 0
    if (diff < 0){
        amount += psum
    }else{
        amount += diff
    }
        for (let i = 0; amount > 0 && i < coins.length; i++) {
            let value = coins[i]
            if (value <= amount) {
                res[i] = Math.floor(amount / value)
                amount -= value * res[i]
                amount = parseFloat((amount).toFixed(2))
            }else{
                res[i] = 0
            }
        }
    return(res.reverse())  
}
p=1.25
pm=[0.5,0.25,0.25]

console.log(ChangeMaker(p, pm))