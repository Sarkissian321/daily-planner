var currentHour = dayjs().hour()
console.log(currentHour)

$(function () {

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm A"))

  $(".saveBtn").on("click", function () {

    var userData = $(this).siblings(".description").val()
    var timeBlock = $(this).parent().attr("id").split("-")[1]

    console.log(userData, timeBlock)
    localStorage.setItem(timeBlock, userData)
  })

  for (let i = 9; i <= 17; i++) {
    var savedValue = localStorage.getItem(i)
    $("#hour-" + i).children(".description").val(savedValue)
    if (i < currentHour) {
      $("#hour-" + i).children(".description").addClass("past")
    } else if (i == currentHour) {
      $("#hour-" + i).children(".description").addClass("present")
    } else {
      $("#hour-" + i).children(".description").addClass("future")
    }
  }
});



$(".saveBtn").on("click", function () {
  var userData = $(this).siblings(".description").val()
  var timeBlock = $(this).parent().attr("id").split("-")[1]
  console.log(userData, timeBlock)
  localStorage.setItem(timeBlock, userData)
});

$('.printBtn').click(function () {
  window.print();
  alert("Your schedule is now being printed and refreshed.");
  localStorage.clear();
});

