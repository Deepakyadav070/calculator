
function Calculator() {

  let currentInput = '';
  let previousInput = '';
  let operation = null;

  function appendToDisplay(number) {
    if (currentInput === '0' && number !== '.') {
      currentInput = '';
    }
    currentInput += number;
    updateDisplay();
  }

  function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
      calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
  }

  function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
  }

  function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
  }

  function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput || '0';
  }

  return (
    <>
      <div id="calculator">
        <input id="display" readOnly />
        <div id="keys">
          <button onClick={() => setOperation('+')} className="operator-btn">+</button>
          <button onClick={() => appendToDisplay('7')}>7</button>
          <button onClick={() => appendToDisplay('8')}>8</button>
          <button onClick={() => appendToDisplay('9')}>9</button>
          <button onClick={() => setOperation('-')} className="operator-btn">-</button>
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
          <button onClick={() => setOperation('*')} className="operator-btn">*</button>
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
          <button onClick={() => setOperation('/')} className="operator-btn">/</button>
          <button onClick={() => appendToDisplay('0')}>0</button>
          <button onClick={() => appendToDisplay('.')}>.</button>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => clearDisplay()} className="operator-btn">C</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;