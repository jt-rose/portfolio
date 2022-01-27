$(() => {
  /* -------------------------------------------------------------------------- */
  /*                              get HTML elements                             */
  /* -------------------------------------------------------------------------- */

  const $gaLogo = $("#ga-logo-container");
  const $challengerLogo = $("#challenger-logo-container");
  const $bareLogo = $("#bare-logo-container");

  const $gaExp = $("#ga-experience-info");
  const $challengerExp = $("#challenger-experience-info");
  const $bareExp = $("#bare-experience-info");

  /* -------------------------------------------------------------------------- */
  /*                               site functions                               */
  /* -------------------------------------------------------------------------- */

  //

  /* -------------------------------------------------------------------------- */
  /*                             add event listeners                            */
  /* -------------------------------------------------------------------------- */

  $gaLogo.on("click", () => {
    $gaExp.show();
    $challengerExp.hide();
    $bareExp.hide();
  });

  $challengerLogo.on("click", () => {
    $gaExp.hide();
    $challengerExp.show();
    $bareExp.hide();
  });

  $bareLogo.on("click", () => {
    $gaExp.hide();
    $challengerExp.hide();
    $bareExp.show();
  });
});
