
console.log("--- Initializing Inventory System ---");

// 1. DATA & INPUT INITIALIZATION
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Get product details and validate input
while (true) {
    let inputName = prompt("Enter new product name (Cancel to stop):");

    // Handle cancelled or empty name
    if (inputName === null) {
        console.log("Product entry cancelled.");
        break;
    }

    inputName = inputName.trim();

    if (inputName === "") {
        console.log("Product name cannot be empty. Try again.");
        continue;
    }

    let inputPrice = prompt("Enter product price:");

    if (inputPrice === null || inputPrice.trim() === "") {
        console.log("Price missing. Try entering the product again.");
        continue;
    }

    // Explicit type conversion
    const price = Number(inputPrice);

    if (!Number.isFinite(price) || price <= 0) {
        console.log("Invalid price. Enter a positive number.");
        continue;
    }

    // Prevent duplicate product names
    let duplicate = false;

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name.toLowerCase() === inputName.toLowerCase()) {
            duplicate = true;
            break;
        }
    }

    if (duplicate) {
        console.log("Product already exists. Try another name.");
        continue;
    }

    inventory.push({
        name: inputName,
        price: price
    });

    console.log(
        `[Product added: ${inputName} at $${price}]`
    );

    break;
}


// 2. CONTROL FLOW & CATEGORY ASSIGNMENT

// Arrow function with switch statement
const getCategory = (price) => {
    switch (true) {
        case (price < 50):
            return "Budget";

        case (price < 200):
            return "Standard";

        default:
            return "Premium";
    }
};


// 3. LOOPS & INVENTORY PROCESSING

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((product) => {
    const category = getCategory(product.price);

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${category}`
    );
});


// Search for a product using a loop and break
function findProduct(productName) {
    for (let i = 0; i < inventory.length; i++) {
        if (!inventory[i].name) {
            continue;
        }

        if (
            inventory[i].name.toLowerCase() ===
            productName.toLowerCase()
        ) {
            return inventory[i];
        }
    }

    return null;
}


// 4. FUNCTIONS, SCOPE & FINANCIAL ANALYTICS

// Standard function to calculate inventory value
function calculateTotalValue(items) {
    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    return total;
}

// Arrow function with default tax and discount parameters
const calculateAdjustedPrice = (
    price,
    taxRate = 0,
    discountRate = 0
) => {
    const discountedPrice = price * (1 - discountRate / 100);
    return discountedPrice * (1 + taxRate / 100);
};

// Example: $150 with 10% tax and 5% discount
const exampleAdjustedPrice = calculateAdjustedPrice(150, 10, 5);


// 5. ARRAY METHODS & REPORT GENERATION

console.log("\n--- Financial Analytics ---");

// Calculate total inventory value
const totalValue = calculateTotalValue(inventory);

console.log(`Total Inventory Value: $${totalValue}`);

// Filter products under $200
const affordableProducts = inventory.filter(
    product => product.price < 200
);

const affordableNames = affordableProducts.map(
    product => product.name
);

console.log(
    `Filtered Affordable Items (Under $200): ${JSON.stringify(affordableNames)}`
);

// Create formatted report using map()
const formattedReport = inventory.map(
    product => `${product.name.toUpperCase()}: $${product.price}`
);

console.log(
    `Formatted Report List: ${JSON.stringify(formattedReport)}`
);

// Optional tax and discount example
console.log(
    `Monitor price after 10% tax and 5% discount: $${exampleAdjustedPrice.toFixed(2)}`
);
