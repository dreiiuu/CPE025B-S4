// Declared oyr variable "counter" = 0 in wihch it will track the current iteration in the loop.
// Declared our variable "maxValue" = 10 and "result" = 1.
let counter = 0; 
let maxValue = 10; 
let result = 1; 
 
// debugger is a statement that allows us to pause and check the current state of variables.
debugger; 

for (counter = 0; counter < maxValue; counter++) { 
    console.log(result); 
    result *= maxValue - counter - 1; 
} 

// Prints the results (final value)
console.log("Final result: ", result);
