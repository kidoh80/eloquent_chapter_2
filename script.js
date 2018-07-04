//  Looping A Triangle

console.log("Looping a Triangle");

let hash = "";
for (let i = 0; i < 7; i++) {
	hash += "#";
	console.log(hash);
}

console.log("");
console.log("FizzBuzz");

let fizzBuzz = "";

for (let i = 1; i <= 100; i++) {
	fizzBuzz = "";
    if (i % 3 == 0) fizzBuzz = "Fizz";
	if (i % 5 == 0) fizzBuzz += "Buzz";
	console.log(fizzBuzz || i);
}

console.log("");
console.log("Chessboard");

let size = 20;

function makeOdd(size) {
	let row = "";
	for (let i = 0; i < size; i++) {
		if (i % 2) row += "#";
		else row += " ";
	}
	return row;
}

function makeEven(size) {
	let row = "";
	for (let i = 0; i < size; i++) {
		if (i % 2) row += " ";
		else row += "#";
	}
	return row;
}

for (let x = 0; x < size; x++) {
	if (x % 2 == 0) console.log(makeOdd(size));
	else console.log(makeEven(size));
}

console.log(" ");
console.log("Chessboard v2");

let checkBoard = "";

for (let x = 0; x < size; x++) {
	for (let y = 0; y < size; y++) {
		if ((x + y) % 2 == 0) checkBoard += " ";
		else checkBoard += "#";
	}
	checkBoard += "\n";
}	
console.log(checkBoard);
