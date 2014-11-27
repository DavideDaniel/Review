// function removeEvens
// takes an array of numbers
// returns a new array of numbers that has the even numbers removed
var a = [3, 4, 5, 6, 20, 11, 12, 13, 353, 45664, 545];
var b = removeEvens(a);
// b now equals [3,5,11]
function removeEvens(x) {
    var y = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            y.push(x[i]);
        }
    }
    console.log(y); // console.log needs to be in the same scope as the variable - putting it here returns 1 array filled variables
}
b;