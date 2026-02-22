from flask import Flask, render_template, request, jsonify
import math
import json
import os

app = Flask(__name__, template_folder='.', static_folder='static')

class ScientificCalculator:
    def __init__(self):
        self.history = []
    
    def calculate(self, expression):
        """Evaluate mathematical expression safely"""
        try:
            # Replace common notations
            expression = expression.replace('^', '**')
            
            # Create safe namespace with math functions
            safe_dict = {
                'sin': math.sin,
                'cos': math.cos,
                'tan': math.tan,
                'asin': math.asin,
                'acos': math.acos,
                'atan': math.atan,
                'sinh': math.sinh,
                'cosh': math.cosh,
                'tanh': math.tanh,
                'sqrt': math.sqrt,
                'log': math.log10,
                'ln': math.log,
                'log2': math.log2,
                'exp': math.exp,
                'abs': abs,
                'pi': math.pi,
                'e': math.e,
                'factorial': math.factorial,
                'degrees': math.degrees,
                'radians': math.radians,
                'floor': math.floor,
                'ceil': math.ceil,
            }
            
            # Evaluate the expression
            result = eval(expression, {"__builtins__": {}}, safe_dict)
            
            # Store in history
            self.history.append({'expression': expression, 'result': result})
            
            return {
                'success': True,
                'result': result,
                'expression': expression
            }
        except ZeroDivisionError:
            return {
                'success': False,
                'error': 'Division by zero'
            }
        except ValueError as e:
            return {
                'success': False,
                'error': f'Invalid value: {str(e)}'
            }
        except Exception as e:
            return {
                'success': False,
                'error': f'Invalid expression: {str(e)}'
            }
    
    def get_history(self):
        return self.history
    
    def clear_history(self):
        self.history = []

# Initialize calculator
calculator = ScientificCalculator()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    expression = data.get('expression', '')
    
    result = calculator.calculate(expression)
    return jsonify(result)

@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(calculator.get_history())

@app.route('/clear-history', methods=['POST'])
def clear_history():
    calculator.clear_history()
    return jsonify({'success': True, 'message': 'History cleared'})

@app.route('/constants', methods=['GET'])
def get_constants():
    constants = {
        'pi': math.pi,
        'e': math.e,
        'phi': (1 + math.sqrt(5)) / 2,  # Golden ratio
        'tau': 2 * math.pi,
    }
    return jsonify(constants)

if __name__ == '__main__':
    # Get port from environment variable or use default
    port = int(os.environ.get('PORT', 5001))
    debug = os.environ.get('FLASK_ENV') == 'development'
    app.run(debug=debug, host='0.0.0.0', port=port)
