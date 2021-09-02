import "./styles/numbers.css";

const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

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

const formatNumberString = numbers =>
  numbers
    .split("")
    .map(num => `<span class=${numberMap[num]}>${num}</span>`)
    .join("");

const inputChange = event => {
  outputElement.innerHTML = formatNumberString(event.target.value);
};

inputElement.addEventListener("input", inputChange);
