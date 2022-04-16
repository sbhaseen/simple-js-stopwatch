const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const decisecondElement = document.querySelector("#decisecond");

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

const timerObject = {
  decisecond: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
};

let intervalObject;

const allDisplayElements = [
  decisecondElement,
  secondsElement,
  minutesElement,
  hoursElement,
];

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  clearInterval(intervalObject);
  intervalObject = setInterval(updatedecisecond, 10);
}

function stopTimer() {
  clearInterval(intervalObject);
}

function resetTimer() {
  clearInterval(intervalObject);
  Object.keys(timerObject).forEach((key) => (timerObject[key] = 0));
  allDisplayElements.forEach((element) => updateDisplayValues(element, 0));
}

function updateDisplayValues(
  elementName,
  counterValue,
  padPlaces = 2,
  padValue = "0"
) {
  elementName.innerHTML = counterValue.toString().padStart(padPlaces, padValue);
}

function updatedecisecond() {
  timerObject.decisecond++;
  if (timerObject.decisecond > 99) {
    timerObject.decisecond = 0;
    updateSeconds();
  }
  updateDisplayValues(decisecondElement, timerObject.decisecond);
}

function updateSeconds() {
  timerObject.seconds++;
  if (timerObject.seconds > 59) {
    timerObject.seconds = 0;
    updateMinutes();
  }
  updateDisplayValues(secondsElement, timerObject.seconds);
}

function updateMinutes() {
  timerObject.minutes++;
  if (timerObject.minutes > 59) {
    timerObject.minutes = 0;
    updateHours();
  }
  updateDisplayValues(minutesElement, timerObject.minutes);
}

function updateHours() {
  timerObject.hours++;
  if (hours > 59) {
    timerObject.hours++;
  }
  updateDisplayValues(hoursElement, timerObject.hours);
}

window.onload = resetTimer();
