// Create a variable to get the elements from the HTML
// Bring information of the class from the HTML document

const deleteButton = document.querySelector(".calculator__button--delete");
const numberButtons = document.querySelectorAll(".calculator__button--number");
const numberDisplay = document.querySelector(".calculator__display");
const clearButtons = document.querySelector(".calculator__button--clear");
const equalButton = document.querySelector(".calculator__button--equals");
const mathOperator = document.querySelectorAll(".calculator__button--operator");

// create a variable that would allow the number to change.
// will need to change from the string to number.
let firstNumber = "";
let secondNumber = "";
let operator = "";

// create a function that will allow the number to be display.
const showNumber = (event) => {
  const numberPressed = parseInt(event.target.value);
  if (firstNumber && operator) {
    secondNumber = numberPressed;
  } else {
    firstNumber = numberPressed;
  }
  numberDisplay.innerHTML += numberPressed;
};

const doubleDigit = (event) => {
  const doublePressed = parseInt(event.target.value);
if (firstNumber > 10 && operator) {
  secondNumber = doublePressed
} else if (secondNumber > 10)
  numberDisplay.innerHTML += doublePressed;
}

const showOperator = (event) => {
  operator = event.target.value;
  numberDisplay.innerHTML = operator;
};

const clearNumber = (event) => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  numberDisplay.innerHTML = "";
};

clearButtons.addEventListener("click", clearNumber);

numberButtons.forEach((button) => {
  button.addEventListener("click", showNumber);
});

mathOperator.forEach((operator) => {
  operator.addEventListener("click", showOperator);
});

const sumOfNumber = () => {
  let totalNumber = 0;
  console.log(totalNumber);
  switch (operator) {
    case "+":
      totalNumber = firstNumber + secondNumber;
      break;
    case "-":
      totalNumber = firstNumber - secondNumber;
      break;
    case "÷":
      totalNumber = firstNumber / secondNumber;
      console.log(totalNumber);
      break;
    case "x":
      totalNumber = firstNumber * secondNumber;
      break;
    default:
      totalNumber = "error";
  }
  numberDisplay.innerHTML = totalNumber;
};

equalButton.addEventListener("click", sumOfNumber);

// // When we click on an operator,
// // we want to make the secondNumber = firstNumber, then reset firstNumber = ""

// const rest = (firstNumber, secondNumber) => {
//   if ((secondNumber = firstNumber)) return (firstNumber = parseInt(""));
// };

// mathOperator.forEach((operator) => {
//   operator.addEventListener("click", rest);
// });
