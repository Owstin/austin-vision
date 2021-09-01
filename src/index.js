import "./styles/numbers.css";

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

let numberString;
let formattedOutput;

const inputChange = event => {
  numberString = event.target.value;
};

const numberMap = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const submitForm = event => {
  event.preventDefault();
  formattedOutput = numberString
    .split("")
    .map(num => `<span class=${numberMap[num]}>${num}</span>`)
    .join("");

  outputElement.innerHTML = formattedOutput;
};

inputElement.addEventListener("input", inputChange);
formElement.addEventListener("submit", submitForm);
