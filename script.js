$(function () {
  $(".saveBtn").on("click", function() {
    var timeBlock = $(this).closest(".time-block");
    var timeBlockID = timeBlock.attr("id");
    var userInput = timeBlock.find("textarea").val();
    localStorage.setItem(timeBlockID, userInput);
  });
});
