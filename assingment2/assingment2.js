
let billAmount = Number(prompt("Enter your bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

// Calculate the tip
let tip = billAmount * tipPercentage / 100;

// Calculate the total using an assignment operator
let totalAmount = billAmount;
totalAmount += tip;

// Display the formatted output
console.log(`Subtotal: $${billAmount}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${tip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);
