// Confirm Ending
//
// Check if a string (first argument, str) ends with the given target string
// (second argument, target)
// This challenge can be solved with the .endsWith() method, which was introduced ES2015,
// but the challenge is to use a JS substring method instead.

// function confirmEnding(str, target) {
//   if (str.substr(-target.length) === target) {
//     return true;
//   }
//   return false;
// }
//
// confirmEnding("Bastian", "n");
// substr = substring

//so you use negative objects to get the last letters of your string

function confirmEnding (str, target) {
 return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");

// ---------------------------------------------------------
// slice method
function confirmEnding (str, target) {
 return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");

console.log(confirmEnding("Bastian", "n"));
