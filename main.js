import { debounce } from './debounce.js';

function handleInput(event) {
    const value = event.target.value;
return value
    // console.log(`Debounced Input: "${value}"`);
}
const debouncedInputHandler = debounce(handleInput, 500);


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('input');
    const button = document.querySelector('button');

    // 3. Use the debounced handler for the input field
    inputField.addEventListener('keyup', debouncedInputHandler);

    // 4. The button needs its own, non-debounced logic
    button.addEventListener('click', () => {
        // Find the input's current value and log it immediately
        const currentValue = inputField.value;
        console.log(`Button Clicked! Value is: "${currentValue}"`);
    });
});