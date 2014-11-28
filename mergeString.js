// function mergeString

		// takes an array of names
		// returns a string that is some greeting message containing all the names

		var stooges = ["Larry", "Curly", "Moe"];
		var stoogeString = mergeString(stooges);
		// stooge now equals "Hey there, Larry. Hey there, Curly. Hey there, Moe."

function mergeString(x) {
	for (var i = 0; i < x.length; i++) {
		var y = "Hey there, "+x.join(". Hey there, ")+".";
	}
	console.log(y)
};

stoogeString;

var peaches = ["Sean", "Sam", "Crawford"];
var peachesjr = ["David", "Jason", "Rachel", "Trey", "Ciara", "Shoshana", "Alex", "Adam", "Tiffany", "Will", "Ricki"];
mergeString(peaches);
mergeString(peachesjr);