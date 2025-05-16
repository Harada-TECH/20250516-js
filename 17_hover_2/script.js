$(function () {
  // jQueryを記述
  $("a").hover(function() {
    $(this).css("color", "#00FF00");
  }, function() {
    // $(this).css("color", "#FF0000");
    $(this).css("fontSize", "24px");
    $(this).css("backgroundColor", "red");
  });
});