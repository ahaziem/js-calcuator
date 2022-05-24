// to List
// create a variable for  operators,
// research math collocation javascript as a function

// need to create a variable to get the element from the HTML
const deleteButton = document.querySelector(".calculator__button--delete");
const numberButtons = document.querySelectorAll(".calculator__button--number");
const numberDisplay = document.querySelector(".calculator__display");
const clearButtons = document.querySelector(".calculator__button--clear");
const equalButton = document.querySelector(".calculator__button--equals");
const mathOperator = document.querySelectorAll(".calculator__button--operator");

console.log(numberButtons);
// console.log(mathOperator);

// console.log(numberButtons);
let firstNumber = "";
let secondNumber = "";
let operator = "";
let tempArray = [];

// create a function that will create the event
// innerHTML
// innerText
// += ": "
const showNumber = (event) => {
  tempArray.push(event.target.value);
  firstNumber = tempArray[0];
  secondNumber = tempArray[2];
  numberDisplay.innerHTML = tempArray.join("");
  console.log(firstNumber);
  console.log(secondNumber);
};

const showOperator = (event) => {
  operator = event.target.innerText;
  numberDisplay.innerHTML = operator;
};
// console.log(operator);

const clearNumber = (event) => {
  numberDisplay.innerHTML = "";
};
// create a function that will delete the last digit number.
// const deleteNumber = (event) => {
//   numberDisplay.innerHTML = numberButtons.innerText - 1;
// };

// it will show the operator key in the display
// mathOperator.addEventListener("click", showOperator);

// conduct the action on take away one number from the display
// deleteButton.addEventListener("click", deleteNumber);
// conduct the action on the web where when clicking the button, it will display the number
// numberOne.addEventListener("click", showNumber);

// conduct the action on the web to clear the display number when clicked the clear button

clearButtons.addEventListener("click", clearNumber);

// it will go through each numbers and display the number on the website when clicked on.
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", showNumber);
}

// numberButtons.forEach((button) => {
//   button.addEventListener("click", showNumber);
// });

mathOperator.forEach((operator) => {
  operator.addEventListener("click", showOperator);
});

// create a function that would do the math operators

// const total = () => {
//   // console.log("function ran");
//   // console.log(firstNumber);
//   // console.log(secondNumber);
//   switch (operator) {
//     case "+":
//       return firstNumber + secondNumber;
//       break;
//     case "-":
//       return firstNumber - secondNumber;
//       break;
//     case "÷":
//       return firstNumber / secondNumber;
//     case "x":
//       break;
//       return firstNumber * secondNumber;
//   }
// };

// equalButton.addEventListener("click", () => {
//   total();
// });

const sumOfNumber = (firstNumber, secondNumber) => {
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
    case "x":
      totalNumber = firstNumber * secondNumber;
      break;
    default:
      totalNumber = "error";
  }
  numberDisplay.innerHTML = totalNumber;
};

equalButton.addEventListener("click", sumOfNumber);

// When we click on an operator,
// we want to make the secondNumber = firstNumber, then reset firstNumber = ""

const rest = (firstNumber, secondNumber) => {
  if ((secondNumber = firstNumber)) return (firstNumber = parseInt(""));
};

mathOperator.forEach((operator) => {
  operator.addEventListener("click", rest);
});
