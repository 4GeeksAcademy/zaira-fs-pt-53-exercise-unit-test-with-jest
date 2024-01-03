
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Function to convert from Euro to Dollar
function fromEuroToDollar(amountInEuro) {
    // Convert directly using the exchange rate
    let amountInDollar = amountInEuro * oneEuroIs["USD"];
    return amountInDollar;
  }

  // Function to convert from Dollar to Yen
function fromDollarToYen(amountInDollar) {
    // Convert to Euro first, then to Yen
    let amountInYen = amountInDollar / oneEuroIs["USD"]* oneEuroIs["JPY"];
    return amountInYen;
  }

  // Function to convert from Yen to Pound
function fromYenToPound(amountInYen) {
  const amountInEuro = amountInYen / oneEuroIs["JPY"];
  const amountInPound = amountInEuro * oneEuroIs["GBP"];
    
    return amountInPound; 
}

  // Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};