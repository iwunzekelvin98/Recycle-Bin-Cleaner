const readUserInput = require("readline");

const userInterface = readUserInput.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserName() {
    userInterface.question("Please Enter your name: \n", (name) => {
    console.log("\nHi", name, "Would you like you free up some storage today?");
     userInterface.close();
});
    
}
getUserName();