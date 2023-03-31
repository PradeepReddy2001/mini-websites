// Get all the buttons and the display element
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', event => {
    // Get the clicked button's value
    const buttonValue = event.target.textContent;

    // Handle different button types
    switch (buttonValue) {
      case 'C':
        // Clear the display
        display.textContent = '';
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        // Add the operator to the display
        display.textContent += ` ${buttonValue} `;
        break;
      case '=':
        // Evaluate the expression and display the result
        const expression = display.textContent;
        const result = eval(expression);
        display.textContent = result;
        break;
      default:
        // Add the number to the display
        display.textContent += buttonValue;
        break;
    }
  });
});
