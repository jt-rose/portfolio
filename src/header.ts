$(() => {
  const $header = $("header");
  const $menuIcon = $("#menu-icon");

  $menuIcon.on("click", (e) => {
    e.preventDefault();
    $header.toggleClass("dropdown-active");
  });
});
