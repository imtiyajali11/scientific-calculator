let currentExpression = '';
let lastResult = '';

const display = document.getElementById('display');
const expressionHistory = document.getElementById('expressionHistory');
const historyList = document.getElementById('historyList');

// Append number to expression
function appendNumber(num) {
    currentExpression += num;
    updateDisplay();
}

// Append operator
function appendOperator(op) {
    if (currentExpression === '' && lastResult !== '') {
        currentExpression = lastResult;
    }

    if (currentExpression !== '' && !currentExpression.endsWith('+') &&
        !currentExpression.endsWith('-') && !currentExpression.endsWith('*') &&
        !currentExpression.endsWith('/') && !currentExpression.endsWith('^') &&
        !currentExpression.endsWith('%') && !currentExpression.endsWith('(')) {
        currentExpression += op;
        updateDisplay();
    }
}

// Append parenthesis
function appendParenthesis(paren) {
    currentExpression += paren;
    updateDisplay();
}

// Append function with opening parenthesis
function appendFunction(func) {
    if (currentExpression === '' && lastResult !== '') {
        currentExpression = lastResult + '*' + func + '(';
    } else {
        currentExpression += func + '(';
    }
    updateDisplay();
}

// Insert constant
function insertConstant(constant) {
    if (currentExpression === '' && lastResult !== '') {
        currentExpression = lastResult + '*' + constant;
    } else {
        currentExpression += constant;
    }
    updateDisplay();
}

// Update display
function updateDisplay() {
    display.value = currentExpression || '0';
    expressionHistory.textContent = currentExpression;
}

// Clear display
function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

// Delete last character
function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

// Toggle sign
function toggleSign() {
    if (currentExpression !== '') {
        if (currentExpression.startsWith('-')) {
            currentExpression = currentExpression.slice(1);
        } else {
            currentExpression = '-' + currentExpression;
        }
        updateDisplay();
    }
}

// Calculate result
async function calculate() {
    if (currentExpression === '') return;

    try {
        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                expression: currentExpression
            })
        });

        const data = await response.json();

        if (data.success) {
            lastResult = data.result;
            display.value = formatResult(data.result);
            expressionHistory.textContent = `${currentExpression} =`;
            currentExpression = '';
            loadHistory();
        } else {
            display.value = 'Error: ' + data.error;
        }
    } catch (error) {
        display.value = 'Error: Connection failed';
        console.error('Error:', error);
    }
}

// Format result
function formatResult(result) {
    if (typeof result !== 'number') return result;

    // For very large or very small numbers, use scientific notation
    if (Math.abs(result) > 1e10 || (Math.abs(result) < 1e-10 && result !== 0)) {
        return result.toExponential(10);
    }

    // Round to 12 decimal places
    return Math.round(result * 1e12) / 1e12;
}

// Load history from server
async function loadHistory() {
    try {
        const response = await fetch('/history');
        const history = await response.json();

        historyList.innerHTML = '';

        // Display history in reverse order (newest first)
        for (let i = history.length - 1; i >= 0; i--) {
            const item = history[i];
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <span class="history-expression">${item.expression}</span>
                <span class="history-result">= ${formatResult(item.result)}</span>
            `;

            // Click to insert result
            historyItem.addEventListener('click', function () {
                currentExpression = String(item.result);
                lastResult = item.result;
                updateDisplay();
            });

            historyList.appendChild(historyItem);
        }
    } catch (error) {
        console.error('Error loading history:', error);
    }
}

// Clear history
async function clearHistory() {
    if (confirm('Are you sure you want to clear all history?')) {
        try {
            await fetch('/clear-history', {
                method: 'POST'
            });
            historyList.innerHTML = '';
            display.value = '0';
            currentExpression = '';
            lastResult = '';
        } catch (error) {
            console.error('Error clearing history:', error);
        }
    }
}

// Keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === '(') {
        event.preventDefault();
        appendParenthesis('(');
    } else if (key === ')') {
        event.preventDefault();
        appendParenthesis(')');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

// Initialize display
updateDisplay();
loadHistory();

// Auto-load history on page load
window.addEventListener('load', loadHistory);
