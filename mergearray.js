// function mergeArray that combine two arrays

// takes two arrays
// returns the combination of the two arrays
// Bonus combine the arrays in alternating syntax, like so:
// //

var fun = ["pretzels", "cheez-its", "m&ms"];
var work = ["raisins", "dried apricots", "nuts", "cranberries"];
var trailMix = mergeArray(fun, work);

function mergeArray(x, y) {
	var c = [];
	for (var i = 0; i < x.length; i++) {
		c.push(x[i]); 
	}
	for (var j = 0; j < y.length; j++) {
		c.push(y[j]);
	}
	return c;
};

console.log(mergeArray(fun, work));

// var mergeArrays = function(a,a2) {
// 	var afinal = [];
// 	for (var i = 0; i < a.length; i++) {
// 		var elem = a[i];
// 		afinal.push(elem);
// 	}
// 	for (var j = 0; j < a2.length; j++) {
// 		afinal.push(a2[j]);
// 	}
// 	return afinal;
// }



// var k = [1,2,3,4,5];
// var l = [11,22,33,44,55, 66];
// //alternating but can't do different lengths...
// function mergeArrayAlt(x, y) {
// 	var c = [];
	
// 	if (x.length<y.length) { z = y.length}
// 		else { z = x.length}
// 	for (var i = 0; i < z; i++) {
		
// 		c.push(x[i]) && c.push(y[i])
	
// 	}
// 		console.log(c);
// };

// mergeArrayAlt(k,l);


var k = [1,2,3,4,5];
var l = [11,22,33,44,55,66,77,88,99];
//alternating and CAN do different lengths!!!
function mergeArrayAlt(x, y) {
	var temp = [];
	var finalArray = [];
	
	if (x.length<y.length) { z = y.length}
		else { z = x.length}
	for (var i = 0; i <= z; i++) {
		
		(temp.push(x[i]) && temp.push(y[i]))
	
	}
	for (var i = 0; i <= temp.length; i++) {
		temp[i] && finalArray.push(temp[i]);
	};

		console.log(finalArray);
};

mergeArrayAlt(k,l);
