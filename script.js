function checkNumber() {
    // Get the value from the input field
    var newNumber = document.getElementById("numberInput").value;
    
    // Check if the input is a valid number
    if (isNaN(newNumber) || newNumber === "") {
        alert("Please enter a valid number.");
        return;
    }

    // Check if the number is even or odd
    var resultBox = document.getElementById("result");
    if (newNumber % 2 === 0) {
        resultBox.innerHTML = newNumber + " is an even number.";
        resultBox.className = "result-box even";  // Style as even
    } else {
        resultBox.innerHTML = newNumber + " is an odd number.";
        resultBox.className = "result-box odd";   // Style as odd
    }

    // Show the result box
    resultBox.style.display = "block";
}
