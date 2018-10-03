var age = prompt("What is your age?");
var days = age * 365;

alert(age + " is roughly " + days + " days old");

console.log(11 == "11");
console.log(11 === "11");
console.log(11 <= 12);
console.log(11 >= 17);
console.log(13 != "13");
console.log(16 !== 16);

console.log(13 < 77 && 2 ===2);
console.log(14 == 55 || 7 == "7");
var x = 10;
var y = "a";
console.log(y === "b" || x >= 10);

var str = ""
var msg = "haha!"
var isFunny = "false"
!(( str || msg) )