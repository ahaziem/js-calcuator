// to List
// create a variable for the equal button, previous number, current no, operators,
// research math collocation javascript as a function

// need to create a variable to get the element from the HTML
const numberOne = document.getElementById("one");
const deleteButton = document.querySelector(".calculator__button--delete")
const numberButtons = document.querySelectorAll(".calculator__button--number");
const numberDisplay = document.querySelector(".calculator__display");
const clearButtons = document.querySelector(".calculator__button--clear");
const mathOperator = document.querySelector(".calculator__button--addition");
const equalButton = document.querySelector(".calculator__button--equals")

// console.log(numberButtons);

// create a function that will create the event
// innerHTML
// innerText
// += ": "
const showNumber = (event) => {
  numberDisplay.innerHTML += event.target.innerText;
};

console.log(showNumber);

// conduct the action on the web where when clicking the button, it will display the number
numberOne.addEventListener("click", showNumber);

// it will go through each numbers and display the number on the website when clicked on.
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", showNumber);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", showNumber);
});

// create a function that would do the math operators

const total = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      return number1 + number2;
      break;
    case "-":
      return number1 - number2;
      break;
    case "/":
      return number1 / number2;
    case "*":
      break;
      return number1 * number2;
  }
};

console.log(total);
