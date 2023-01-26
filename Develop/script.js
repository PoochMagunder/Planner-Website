// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function displayTime() {
  var todayDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(todayDate);
}
displayTime;
setInterval(displayTime, 1000);

let block9 = document.querySelector("#hour-9");
let userInput = document.body.children[1].children[0].children[1];

let inputs = [];

function renderInputs() {
  for (var i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    userInput.textContent = input;

    userInput.append(userInput);
  }
}

function init() {
  let storedInputs = JSON.parse(localStorage.getItem("block9"));

  if (storedInputs !== null) {
    inputs = storedInputs;
  }
  console.log(inputs);
  renderInputs;
}

function storeInputs() {
  localStorage.setItem("block9", JSON.stringify(inputs));
}

block9.addEventListener("click", function (event) {
  event.preventDefault();

  let inputText = userInput.value.trim();

  if (inputText === "") {
    return;
  }

  inputs.push(inputText);
  inputText.value = "";

  storeInputs();
});

init();

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
