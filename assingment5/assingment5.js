
 // 1. Standard function with default parameters
function calculateArea(length = 5, width = 4) {
    return length * width;
}

// 2. Arrow function with default parameters
const calculateAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

// Calling the standard function with default values
console.log(
    `Standard Function Area (Default 5x4): ${calculateArea()}`
);

// Calling the arrow function with custom values
console.log(
    `Arrow Function Area (Custom 10x3): ${calculateAreaArrow(10, 3)}`
);

// 3. Demonstrate function scope
function scopeExample() {
    var functionVariable = "I am function-scoped";
    console.log(functionVariable);
}

scopeExample();

// 4. Demonstrate block scope
if (true) {
    let blockVariable = "I am block-scoped";
    const anotherBlockVariable = "I am also block-scoped";

    console.log(blockVariable);
    console.log(anotherBlockVariable);
}

// Variables declared with let and const inside this block
// cannot be accessed outside it.
