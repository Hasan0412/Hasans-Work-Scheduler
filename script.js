$(function () {
  $(".saveBtn").on("click", function() {
    var timeBlock = $(this).closest(".time-block");
    var timeBlockID = timeBlock.attr("id");
    var userInput = timeBlock.find("textarea").val();
    localStorage.setItem(timeBlockID, userInput);
  });

  $(".time-block").each(function() {
    var timeBlockID = $(this).attr("id");
    var currentHour = dayjs().format("H");
    var blockHour = parseInt(timeBlockID.split("-")[1]);
  })
});
