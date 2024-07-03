// script.js
document.addEventListener('DOMContentLoaded', () => {
    let seconds = 0;
    let intervalId = null;

    const display = document.getElementById('display');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function updateDisplay() {
        display.textContent = formatTime(seconds);
    }

    startButton.addEventListener('click', () => {
        if (intervalId === null) {
            intervalId = setInterval(() => {
                seconds++;
                updateDisplay();
            }, 1000); // Actualiza cada segundo
        }
    });

    stopButton.addEventListener('click', () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });

    resetButton.addEventListener('click', () => {
        seconds = 0;
        updateDisplay();
    });

    updateDisplay(); // Muestra 00:00:00 inicialmente
});
