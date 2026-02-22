# Scientific Calculator - Project Instructions

A modern, web-based scientific calculator built with Flask (Python) and vanilla HTML/CSS/JavaScript.

## Project Overview

This is a full-stack web application featuring:
- **Backend**: Python Flask server that handles mathematical calculations safely
- **Frontend**: Responsive HTML/CSS/JavaScript interface
- **Features**: 30+ scientific functions, calculation history, keyboard support
- **Deployment**: Shareable via URL to colleagues for testing

## Getting Started

### Prerequisites
- Python 3.7+
- pip (Python package manager)

### Installation

1. Navigate to project directory
2. Virtual environment is already set up at `.venv/`
3. Dependencies installed: Flask==3.0.0, Werkzeug==3.0.0

### Running the Application

The application is configured to run on **http://localhost:5001**

To start:
1. Run the task: "Run Scientific Calculator"
2. Access at: http://localhost:5001

## Project Structure

```
Scientific Calculator/
├── app.py                    # Flask backend (calculations, API)
├── index.html               # Frontend HTML template
├── static/
│   ├── style.css           # UI styling (responsive design)
│   └── script.js           # Client-side logic & interactions
├── requirements.txt         # Python dependencies
├── README.md               # Full documentation
├── .venv/                  # Python virtual environment
└── .github/
    └── copilot-instructions.md  # This file
```

## Available Functions

### Basic Operations
- Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- Decimal support, sign toggle

### Scientific Functions
- **Trigonometric**: sin, cos, tan, asin, acos, atan
- **Hyperbolic**: sinh, cosh, tanh
- **Logarithmic**: log (base 10), ln (natural), log₂
- **Exponential**: e^x, x^y
- **Other**: √, x!, |x|, mod
- **Angle**: degrees, radians conversion

### Constants
- π (pi): 3.14159...
- e (Euler): 2.71828...

## Key Features

1. **Calculator Modes**
   - Basic: Standard arithmetic operations
   - Scientific: Advanced mathematical functions

2. **Calculation History**
   - Automatic saving of all calculations
   - Click to reuse previous results
   - Clear history option

3. **Keyboard Support**
   - Numbers: 0-9
   - Operations: +, -, *, /
   - Calculate: Enter or =
   - Delete: Backspace
   - Clear: Escape

4. **Responsive Design**
   - Works on desktop, tablet, mobile
   - Touch-friendly buttons
   - Optimized for all browsers

## API Endpoints

### POST `/calculate`
Evaluates a mathematical expression

### GET `/history`
Returns all calculation history

### POST `/clear-history`
Clears calculation history

### GET `/constants`
Returns mathematical constants

## Sharing with Colleagues

### Option 1: Local Network
Share your IP address:
```bash
ifconfig | grep inet  # Find your local IP
# Share: http://<your-ip>:5001
```

### Option 2: Deploy to Cloud
Recommendations for free hosting:
- Heroku (Recommended)
- PythonAnywhere
- Replit
- Railway

See README.md for detailed deployment instructions.

## Development Notes

- Safe expression evaluation using restricted Python namespace
- No external CDN dependencies (full offline support)
- Backend validates all mathematical expressions
- Error handling for invalid inputs
- Result formatting for very large/small numbers

## Common Tasks

### Modify Calculation Functions
Edit the `safe_dict` in `app.py` to add/remove supported functions

### Change Server Port
Edit `app.py` line: `port=5001` to desired port

### Customize UI
Edit `static/style.css` for colors, layout, fonts

### Add New Buttons
1. Add HTML in `index.html`
2. Add JavaScript handler in `static/script.js`
3. Add backend function if needed in `app.py`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port already in use | Change port in app.py or kill existing process |
| "Invalid expression" | Check parentheses and function names |
| Functions work in scientific but not basic | Switch to Scientific mode |
| History not loading | Check browser console for errors |

## Testing the Calculator

1. Basic: 2+2 should equal 4
2. Scientific: sin(radians(30)) should equal 0.5
3. Constants: pi should equal 3.14159...
4. History: All calculations should appear in history panel

## Browser Compatibility

✅ Chrome/Chromium, Firefox, Safari, Edge, Mobile browsers

## Performance Metrics

- Initial load: < 1 second
- Calculation response: < 100ms
- Zero dependencies from CDN (all bundled locally)

## Security Considerations

- All expressions validated server-side
- Restricted namespace prevents code injection
- No user input stored without consent
- No external requests made

---

**Status**: ✅ Production Ready
**Last Updated**: February 22, 2026
**Python Version**: 3.9.6
