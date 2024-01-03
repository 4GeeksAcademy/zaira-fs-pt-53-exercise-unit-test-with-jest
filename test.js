const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Use the function like it's supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = Math.round(3.5 * 1.07 * 100) / 100; 
    
    // Round both values to two decimals and compare
    const roundedDollars = Math.round(dollars * 100) / 100;
    const roundedExpected = Math.round(expected * 100) / 100;
    
    // Round both values to two decimals and compare
    expect(roundedDollars).toBe(roundedExpected);
});

test("One dollar should be 146.26 yen", function() {
    // Use the function like it's supposed to be used
    const yen = fromDollarToYen(4);
    
    const expected = 4 * 146.26;
    // Round the received value down to .04 using Math.floor
    const roundedYen = Math.floor(yen * 100) / 100;

    expect(roundedYen).toBe(expected);
});

test("One yen should be 0.00556 pound", function() {
    // Use the function like it's supposed to be used
    const pound = fromYenToPound(156.5);

    // If 1 yen is 0.00556 pound, then 156.5 yen should be (156.5 * 0.00556) pound
    const expected = 156.5 * 0.00556; 

    expect(Number(pound.toFixed(2))).toBe(Number(expected.toFixed(2)));
});