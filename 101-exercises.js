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
function addToDone(message) {
    const node = document.createElement("LI");              // Create a <li> node
    let textnode = document.createTextNode(message);              // Create a text node
    node.appendChild(textnode);                                    // Append the text to <li>
    node.classList.add("finished");
    document.querySelector(".correct ul").appendChild(node);
    document.querySelector("#count").innerHTML = document.querySelectorAll('.finished').length + " of 101";
}

// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true.
// To complete Exercise #0, uncomment the following line of JS.
let doingJSRightnow = document.getElementById(true);

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
let doingJSRightnow = (true);


// Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
let onMarsRightNow = false;
assert(onMarsRightNow, false, "Exercise 1");
addToDone("Exercise 1 is correct.");

// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
let fruits = ['mango', 'banana', 'guava', 'kiwi', 'strawberry'];
assert(fruits, ['mango', 'banana', 'guava', 'kiwi', 'strawberry'], 'Exercise 2');
addToDone("Exercise 2 is correct.");

// Exercise 3
// Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
// eggplant, broccoli, carrot, cauliflower, and zucchini
let vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zuchinni']
assert (vegetables ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Exercise 3");
addToDone('Exercise 3 is correct.');

// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
addToDone("Exercise 4 is correct");

