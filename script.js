$(document).ready(function() {
  $("#flipbook").turn({
    width: $(window).width(),
    height: $(window).height(),
    autoCenter: true,
    display: 'single',
    acceleration: true,
    gradients: true
  });

  // biar bisa swipe di layar sentuh
  $("#flipbook").on("swipeleft", function() {
    $(this).turn("next");
  });
  $("#flipbook").on("swiperight", function() {
    $(this).turn("previous");
  });
});
