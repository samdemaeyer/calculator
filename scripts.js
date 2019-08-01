const calculator = document.querySelector('.calculator');
let selectedOperator;
let clickNumber;
let previousResult;
let operatorClicked = false;

function selectOperator(el) {
  selectedOperator = el.getAttribute('data-attr');
  if (clickNumber && operatorClicked && previousResult) {
    const result = eval(`${previousResult}${selectedOperator}${clickNumber}`);
    document.querySelector('#result').innerText = result;
  }
  
  operatorClicked = true;
}

function selectNumber(el) {
  if (!clickNumber || operatorClicked) {
    clickNumber = el.getAttribute('data-attr');
  } else {
    clickNumber = `${clickNumber}${el.getAttribute('data-attr')}`;
  }
  previousResult = document.querySelector('#result').innerText;

  document.querySelector('#result').innerText = clickNumber;
  
}

function reset() {
  document.querySelector('#result').innerText = "0";
  selectedOperator = undefined;
  clickNumber = undefined;
}