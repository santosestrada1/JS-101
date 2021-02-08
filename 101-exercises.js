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
    let textnode = document.createTextNode(message);                // Create a text node
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

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push('tomato');
assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");
addToDone("Exercise 5 is correct");

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push('tomato');
assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");
addToDone("Exercise 6 is correct");

// Exercise 7
// Given the array of number defined below, reverse the array of numbers that you created above.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
assert(numbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7");
addToDone("Exercise 7 is correct");

// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method.
let vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato" ];
vegetables.sort();
assert(vegetables, ["broccoli", "carrot", "cauliflower",  "eggplant", "tomato", "zucchini"], "Exercise 8")
addToDone("Exercise 8 is correct.")

// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort();fruits.reverse();
assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
addToDone("Exercise 9 is correct.")

// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

let fruitsAndVeggies = fruits.concat(vegetables)
assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
addToDone("Exercise 10 is correct")

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    let randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

