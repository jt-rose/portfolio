$(() => {
  const $header = $("header");
  const $menuIcon = $("#menu-icon");

  $menuIcon.on("click", (e) => {
    e.preventDefault();
    $header.css("transition", "0.7s");
    if ($header.hasClass("dropdown-active")) {
      $menuIcon.children().removeClass("fa-times").addClass("fa-bars");
    } else {
      $menuIcon.children().removeClass("fa-bars").addClass("fa-times");
    }
    $header.toggleClass("dropdown-active");
  });
  setTimeout(() => {
    $header.css("transition", "0");
  }, 700);
});
