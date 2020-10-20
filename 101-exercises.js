"use strict";   // leave this line here :)

// Keep this function definition in order to test expected vs. actual results
const assert = function(actual, expected, message = "") {

    // This compares primitive values and collections. If they differ, throw an error.
    if(JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error('[assert] expected:     ' + expected)
        console.error('[assert] instead got:  ' + actual)
        throw Error ("Assert failed in " + message);
    }
};


// Keep this function here in order to add correct questions to the counter