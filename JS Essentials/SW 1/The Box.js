// Import the built-in Node.js module that allows us to read user input
const readline = require("readline");

// Interface to communicate with the user
// The input is where we read so this is the keyboard and the output is where we write to the terminal screen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for the width, dispalys the message, the input is now stored in the parameter "width"
rl.question("Enter width: ", (width) => {

  // After width, we get the height
  rl.question("Enter height: ", (height) => {

    // Last is the length
    rl.question("Enter length: ", (length) => {

      // Convert the string inputs to numbers and calculate the volume
      let volume = Number(width) * Number(height) * Number(length);

      // Display the result to the user
      console.log(`Box Volume: ${volume}`);

      // Close the interface and end the program
      rl.close();
    });
  });
});