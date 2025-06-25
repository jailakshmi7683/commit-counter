// Step 1: Start with a count of 0
let count = 0;

// Step 2: Get reference to DOM elements
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Step 3: Update the UI function
function updateDisplay() {
  countDisplay.textContent = count;
}

// Step 4: Add click event to Increment
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// Step 5: Add click event to Decrement
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Step 6: Add click event to Reset
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
