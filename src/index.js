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

const randomNum = (() => {
  const cache = [];
  return () => {
    const value = Math.floor(Math.random() * 10);
    if (cache.includes(value)) {
      return randomNum();
    }

    cache.push(value);
    if (cache.length > 3) {
      cache.shift();
    }
    return value;
  };
})();

const inputChange = event => {
  const randomBorder = `border-${numberMap[randomNum()]}`;
  inputElement.className = randomBorder;
  outputElement.innerHTML = formatNumberString(event.target.value);
};

const removeInputBorderClass = () => {
  inputElement.className = "";
};

inputElement.addEventListener("input", inputChange);
inputElement.addEventListener("blur", removeInputBorderClass);
