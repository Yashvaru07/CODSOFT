// calsi.js

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace(/[^-()\d/*+.]/g, ''));
    } catch (e) {
        display.innerText = 'Error';
    }
}

