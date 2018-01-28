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

//to reverse an array
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

// This function makes a new array with numbers only
function numbersOnly(arr) {
	var arrNew = []; 
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] == "number"){
			arrNew.push(arr[i]);
		} 
	}
	return arrNew; 
}
console.log(numbersOnly([3, 6, "hello", 7, "bye", 10, 16, "I", "string"]));

//this function removes all numbers from the original array 
function noNumbers(arr) {

	for(var i = arr.length- 1; i >= 0; i--){
		if(typeof arr[i] == "number"){
			arr.splice(i, 1);
		} 
	}
	return arr; 
}
console.log(noNumbers([3, 6, "hello", 7, "bye", 10, 16, "I", "string"]));
