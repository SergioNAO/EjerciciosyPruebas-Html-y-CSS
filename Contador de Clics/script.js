// script.js
document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const clickButton = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');

    clickButton.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    });
});
