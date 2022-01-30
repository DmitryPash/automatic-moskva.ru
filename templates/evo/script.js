$(document).ready(function () {
  $(".menu-burger").click(function () {
    $(this).toggleClass("active");
    $(".menu").slideToggle(300);
  });
});
