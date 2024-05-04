import './Calculator.css'; 
import './CalculatorKeyHandle';

function Calculator() {
  return (
    <div class = "calculator">
    <div class = "calculator_output">0</div>
    <div class = "calculator_keys">
        <button class = "calculator_key calculator_key_operator" data-action = "add">+</button>
        <button class = "calculator_key calculator_key_operator" data-action = "subtract">-</button>
        <button class = "calculator_key calculator_key_operator" data-action = "divide">÷</button>
        <button class = "calculator_key calculator_key_operator" data-action = "multiply">&times;</button>

        <button class = "calculator_key">7</button>
        <button class = "calculator_key">8</button>
        <button class = "calculator_key">9</button>

        <button class = "calculator_key">4</button>
        <button class = "calculator_key">5</button>
        <button class = "calculator_key">6</button>

        <button class = "calculator_key">1</button>
        <button class = "calculator_key">2</button>
        <button class = "calculator_key">3</button>

        <button class = "calculator_key" data-action = "decimal">.</button>
        <button class = "calculator_key" data-action = "clear">AC</button>

        <button class = "calculator_key calculator_key_result" data-action = "calculate">=</button>

    </div>
</div>

  );
}

export default Calculator;
