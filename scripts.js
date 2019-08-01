// set default global variables
let selectedOperator;
let clickedNumber;
let previousResult;
let operatorClicked = false;

function selectOperator(el) {
  // set `selectedOperator` to selecyed operator
  selectedOperator = el.getAttribute('data-attr');
  if (clickedNumber && operatorClicked && previousResult) {
    // Evaluate the equasion of prevResult, operator and clickedNr eg. "7+3"
    const result = eval(`${previousResult}${selectedOperator}${clickedNumber}`);
    // Assign the result the innterText of the HTML element with the `ID` result 
    document.querySelector('#result').innerText = result;
  }

  // set `operatorClicked` flag to `true`
  operatorClicked = true;
}

function selectNumber(el) { // eg. new clicked number is 7
  if (!clickedNumber || operatorClicked) {
    // If we did no click a number OR clicked on an operaotor, 
    // set `clickedNumber` to the number we clieked on.
    clickedNumber = el.getAttribute('data-attr');
  } else {
    // else concatinate the previous clicked number with new cliecked number
    // eg. previous clicked number is 2, new clicked number is 7, result will be 27
    clickedNumber = `${clickedNumber}${el.getAttribute('data-attr')}`;
  }

  // set previous result to 
  previousResult = document.querySelector('#result').innerText;

  // assign the clickedNr value to yhe innerText of the HTML
  // eg. 7 or 27
  document.querySelector('#result').innerText = clickedNumber;

}

function reset() {
  // reset the HTML to 0 and all global variables
  document.querySelector('#result').innerText = "0";
  selectedOperator = undefined;
  clickedNumber = undefined;
}
