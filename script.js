//your JS code here. If required.
// Function that returns a promise that resolves after a given delay
function delayMessage(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

// Async function to handle the delay and display message
async function displayMessage() {
    // Get user input values
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;
    const outputDiv = document.getElementById("output");

    // Convert delay to a number (milliseconds)
    const delay = parseInt(delayInput, 10);

    // Validate input to ensure a valid number is entered
    if (isNaN(delay) || delay < 0) {
        outputDiv.innerText = "Please enter a valid delay time (positive number).";
        return;
    }

    // Wait for the specified delay
    await delayMessage(delay);

    // Display the message in the output div
    outputDiv.innerText = textInput;
}

// Attach event listener to button
document.getElementById("btn").addEventListener("click", displayMessage);
