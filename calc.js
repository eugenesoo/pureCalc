document.addEventListener('DOMContentLoaded', (e) => {
  let currentValue;
  let previousValue;
  let currentOperation;

  const buttons = document.getElementsByTagName('button');

  const resetValues = () => {
    document.getElementById('numbers').value = 0;
    currentValue = 0;
    previousValue = undefined;
    currentOperation = undefined;
  };

  const setCurrentValue = (value = 0) => {
    document.getElementById('numbers').value = value;
    currentValue = value;
  };

  const setPreviousvalue = (value) => {
    previousValue = value;
    currentValue = undefined;
  };

  const setOperation = (value) => {
    currentOperation = value;
    document.getElementById('operation').value = currentOperation;  
  };

  const computeNums = (operation, a, b) => {
    switch (operation) {
      case 'x':
        return a * b;
        break;
      case '-':
        return a - b;
        break;
      case '+':
        return a + b;
        break;
      case '/':
        return a / b;
        break;
      default:
        break;
    }
  }

  const numClick = (event) => {
    switch (event.target.innerHTML) {
      case '0':
        if (!previousValue) {
          setCurrentValue();
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 0));
        }
        break;
      case '1':
        if (!previousValue) {
          setCurrentValue(1);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 1));
        }
        break;
      case '2':
        if (!previousValue) {
          setCurrentValue(2);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 2));
        }
        break;
      case '3':
        if (!previousValue) {
          setCurrentValue(3);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 3));
        }
        break;
      case '4':
        if (!previousValue) {
          setCurrentValue(4);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 4));
        }
        break;
      case '5':
        if (!previousValue) {
          setCurrentValue(5);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 5));
        }
        break;
      case '6':
        if (!previousValue) {
          setCurrentValue(6);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 6));
        }
        break;
      case '7':
        if (!previousValue) {
          setCurrentValue(7);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 7));
        }
        break;
      case '8':
        if (!previousValue) {
          setCurrentValue(8);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 8));
        }
        break;
      case '9':
        if (!previousValue) {
          setCurrentValue(9);
        } else {
          setCurrentValue(computeNums(currentOperation, previousValue, 9));
        }
        break;
      case 'AC':
        resetValues();
      default:
        if (currentValue) {
          setPreviousvalue(currentValue);
        };
        setOperation(event.target.innerHTML);
        break;
    }
  }

  setCurrentValue();
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', numClick);
  }
});
