var sum = 0;
var mean = 0;
var median = 0;
var numberSet = [1,2,3,4];

var addArray = function(array){
	for(i=0; i < array.length; i++){
		sum += array[i];
	}
	console.log(sum);
};

addArray(numberSet);