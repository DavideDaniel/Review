// function removeEvens
// takes an array of numbers
// returns a new array of numbers that has the even numbers removed
var a = [3, 4, 5, 6, 20, 11];
var b = removeEvens(a);
var m = [342, 23, 34, 21, 2123, 3, 4, 5, 6, 7, 8];
// b now equals [3,5,11]
function removeEvens(x) {
    var y = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            y.push(x[i]);
        }
    }
    console.log(y); // console.log needs to be in the same scope as the variable - putting it here returns 1 array filled with odd numbers
}

b;
removeEvens(m);