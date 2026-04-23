// script.js

// Function to append a number to the display
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Function to append an operator to the display
function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += ' ' + operator + ' ';
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to handle keyboard input
document.addEventListener('keydown', function(event) {
    if (!isNaN(event.key)) {
        appendNumber(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendOperator(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});