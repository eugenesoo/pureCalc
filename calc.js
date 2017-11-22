let currentValue;
let previousValue;
let currentOperation;

const resetValues = () => {
  currentValue = 0;
  previousValue = undefined;
  currentOperation = undefined;
	document.getElementById('numbers').value = currentValue;
  document.getElementById('operation').value = '';
};

const setCurrentValue = (value = 0, isResult) => {
	if (currentValue === 0 || isResult) {
    document.getElementById('numbers').value = value;
  } else {
	  document.getElementById('numbers').value += value;
  }
  	currentValue = parseInt(document.getElementById('numbers').value, 10);
};

const setPreviousvalue = (value) => {
	previousValue = value;
  currentValue = 0;
};

const setOperation = (value) => {
	currentOperation = value;
	document.getElementById('operation').value = currentOperation;  
};

const computeNums = (operation, a, b) => {
	switch (operation) {
  	case 'X':
    	return a * b;
    	break;
    case '-':
    	return a - b;
      break;
    case '+':
    	console.log(a + b);
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
      setCurrentValue();
      break;
  	case '1':
      setCurrentValue(1);
      break;
  	case '2':
			setCurrentValue(2);
      break;
  	case '3':
			setCurrentValue(3);
      break;
  	case '4':
    	setCurrentValue(4);
      break;
  	case '5':
    	setCurrentValue(5);
      break;
  	case '6':
    	setCurrentValue(6);
      break;
  	case '7':
    	setCurrentValue(7);
      break;
  	case '8':
    	setCurrentValue(8);
      break;
  	case '9':
    	setCurrentValue(9);
      break;
    case 'AC':
    	resetValues();
      break;
    case '=':
      setCurrentValue(computeNums(currentOperation, previousValue, currentValue), true);
      currentOperation = undefined;
			document.getElementById('operation').value = '=';  
    	break;
    default:
    	if (!currentOperation) {
      	setPreviousvalue(currentValue);
      	setOperation(event.target.innerHTML); 
      } else if (!currentValue) {
      	
      } else {
      	setOperation(event.target.innerHTML);       
      }
    	break;
  }
}

const buttons = document.getElementsByTagName('button');

setCurrentValue();
for (let i = 0; i < buttons.length; i += 1) {
	buttons[i].addEventListener('click', numClick);
}
