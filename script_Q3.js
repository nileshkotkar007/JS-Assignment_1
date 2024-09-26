// Function to show a greeting message using console.log, alert, and document.write
function showGreeting() {
    const message = "Hello, welcome to the webpage!";
    
    // Display message in the browser's console
    console.log(message);
    
    // Show message in an alert box
    alert(message);
    
    // Write message directly on the webpage
    document.write(message);
}

// Call the function when the page loads
window.onload = showGreeting;
