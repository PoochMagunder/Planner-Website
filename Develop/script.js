// Displays the current date.
function displayTime() {
  var todayDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(todayDate);
}
displayTime;
setInterval(displayTime, 1000);

// Activates all "save buttons".
$(".btn").on("click", function (event) {
  console.log($(this).text());

  event.preventDefault();

  let hour = $(this).parent().attr("id");
  let val = $(this).siblings(".description").val();
  storeInputs(hour, val);
});

// Stores user inputs.
function storeInputs(hour, val) {
  localStorage.setItem(hour, val);
}

// Pulls stored inputs on refresh of page.
function getInputs() {
  for (let i = 9; i <= 17; i++) {
    $(`#hr${i} .description`).val(localStorage.getItem(`hr${i}`));
  }
}

colorChanger();
getInputs();

// Changes the color of the block backgrounds based on current time.
function colorChanger() {
  let time = dayjs().hour();
  $(".time-block").each(function () {
    let hour = $(this).attr("id");
    hour = hour.slice(2);
    console.log(hour);
    if (hour < time) {
      $(this).addClass("past");
    } else if ((hour = time)) {
      $(this).addClass("present");
    } else if (hour > time) {
      $(this).addClass("future");
    }
  });
}
