//double up each value in an array
function DoubleUp(arr){
	var origLen = arr.length; 
	arr.length = arr.length*2; 
	for (var i = origLen - 1; i >= 0; i--) {
		arr[i*2]=arr[i]; 
		arr[i*2+1]=arr[i];
		console.log(arr)
	}
	return arr; 
}
console.log(DoubleUp([7,4,10]))

function reverse(arr){
	var temp; 
	for (var i = 0; i < arr.length/2; i++) {
		temp = arr[i];
		arr[i] = arr[arr.length-1-i]; 
		arr[arr.length-1-i]=temp
	}
	return arr; 
}

console.log(reverse([2,4,6,8]))
