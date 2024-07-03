// script.js
document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let intervalId = null;
    let clickCoords = { x: 0, y: 0 };

    const clickButton = document.getElementById('clickButton');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const selectCoordsButton = document.getElementById('selectCoordsButton');
    const overlay = document.getElementById('overlay');
    const clickMarker = document.getElementById('clickMarker');

    function updateClickCount() {
        count++;
        clickButton.textContent = count;
    }

    startButton.addEventListener('click', () => {
        if (intervalId === null) {
            intervalId = setInterval(() => {
                simulateClick(clickCoords.x, clickCoords.y);
                updateClickCount();
            }, 1000); // Intervalo de 1 segundo
        }
    });

    stopButton.addEventListener('click', () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });

    selectCoordsButton.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', (e) => {
        clickCoords = { x: e.clientX, y: e.clientY };
        clickMarker.style.left = `${clickCoords.x - 5}px`;
        clickMarker.style.top = `${clickCoords.y - 5}px`;
        clickMarker.style.display = 'block';
        overlay.style.display = 'none';
    });

    function simulateClick(x, y) {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        });
        const element = document.elementFromPoint(x, y);
        element.dispatchEvent(event);
    }
});
