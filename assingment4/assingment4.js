
console.log("-- Multiplication Table of 5 --");

// 1. For loop: Print multiplication table up to 5
for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");

// 2. While loop with break
let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log(`Found: ${num}`);
        break;
    }
    num++;
}

// 3. Do...while loop with continue
console.log("\n-- Do...While Loop with Continue --");

let count = 0;

do {
    count++;

    if (count === 3) {
        continue;
    }

    console.log(`Number: ${count}`);

} while (count < 5);
