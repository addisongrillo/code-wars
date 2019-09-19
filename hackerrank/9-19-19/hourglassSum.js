function hourglassSum(arr) {
	let sum = -63
	let y = 0
	while (y < 4){
		let x=0
		while (x < 4){
			let temp=0
			temp+=arr[0+y][0+x]
			temp+=arr[0+y][1+x]
			temp+=arr[0+y][2+x]
			temp+=arr[1+y][1+x]
			temp+=arr[2+y][0+x]
			temp+=arr[2+y][1+x]
			temp+=arr[2+y][2+x]
			if (temp > sum){
				sum=temp
				}
			x++
			}
		y++
		}
	return sum
}
