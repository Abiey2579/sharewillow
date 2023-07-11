$(document).ready(function () {
  $(".humbarger-menu").click(function () {
    $(".collapse").toggle();
  });

  $(window).on("resize", function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    if (windowWidth > 640) {
      $(".collapse").css("display", "flex");
      $(".collapse").css("flex-direction", "row");
    } else {
      $(".collapse").css("display", "flex");
      $(".collapse").css("flex-direction", "column");
    }
  });
});
