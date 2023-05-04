// Constants
const RSA_SHIPPING = 400;
const NAM_SHIPPING = 600;
const OTHER_SHIPPING = 800;
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";

// Variables
let shoes = 300;
let toys = 100 * 5;
let shirts = 150 * 0;
let batteries = 35 * 2;
let pens = 5 * 0;
let shipping = null;
let currency = "$";
let location = "RSA";
let customers = 1;

// Determine shipping cost based on location
if (location === "RSA") {
  shipping = RSA_SHIPPING;
} else if (location === "NAM") {
  shipping = NAM_SHIPPING;
} else if (location === "NK") {
  console.log(BANNED_WARNING);
}

// Determine total cost of items
const totalCost = shoes + toys + shirts + batteries + pens;

// Determine if free shipping applies
if (totalCost >= 1000 && (location === "RSA" || location === "NAM")) {
  if (customers === 1) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

// Display total cost with shipping (if applicable)
if (shipping !== null) {
  const totalWithShipping = totalCost + shipping;
  console.log("Price:", currency + totalWithShipping);
} else {
  console.log("Shipping not determined.");
}
