// Function for finding a match for k value
function findMatch(k) {
    let numbers = [10, 15, 3, 7];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == k) {
                return true;
            }
        }
    }
    return false;
}

document.getElementById('submit').addEventListener('click', function () {
    let k = parseInt(document.getElementById('kValue').value);
    let errorMessage = "You must enter a number!";
    if (isNaN(k)) {
        document.getElementById('errorMessage').innerHTML = errorMessage;       
        document.getElementById('kValue').value = "";
        document.getElementById('userKvalue').innerHTML = "";
        document.getElementById('results').innerHTML = "";
    } else {
        reset();
        findMatch();
        document.getElementById('userKvalue').innerHTML = `Your k value is<br>${k}<br/>`;
        document.getElementById('results').innerHTML = findMatch(k);
    }
})

// // Function to clear input
function reset() {
    document.getElementById('kValue').value = "";
    document.getElementById('errorMessage').innerHTML = "";
    document.getElementById('userKvalue').innerHTML = "";
    document.getElementById('results').innerHTML = "";
}