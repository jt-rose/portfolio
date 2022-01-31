$(() => {
  // get header/ navbar element and menu icon (visible on mobile)
  const $header = $("header");
  const $menuIcon = $("#menu-icon");

  // open or close the menu based on current state
  // and animate the transition
  const animateMenuToggle = () => {
    const windowWidth = $(window).width();
    if (windowWidth && windowWidth < 610) {
      $header.css("transition", "0.7s");
      if ($header.hasClass("dropdown-active")) {
        $menuIcon.children().removeClass("fa-times").addClass("fa-bars");
      } else {
        $menuIcon.children().removeClass("fa-bars").addClass("fa-times");
      }
      $header.toggleClass("dropdown-active");
      setTimeout(() => {
        $header.css("transition", "0");
      }, 700);
    }
  };

  // apply menuToggle animation to all section links
  $("nav a")
    .filter((index) => index !== 5)
    .on("click", animateMenuToggle);

  // for menu/ cancel icon, disable the section link
  // and only animate the menu opening and closing
  $menuIcon.on("click", (e) => {
    e.preventDefault();
    animateMenuToggle();
  });
});
