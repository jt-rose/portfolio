$(() => {
  /* -------------------------------------------------------------------------- */
  /*                        get projects section elements                       */
  /* -------------------------------------------------------------------------- */

  const $rxpPreview = $("#rxp-preview");
  const $cleanBlogPreview = $("#clean-blog-preview");
  const $2dalooPreview = $("#2daloo-preview");
  const $projectsModal = $("#projects-modal");
  const $closeProjectsModalBtn = $("#close-projects-modal-btn");

  /* -------------------------------------------------------------------------- */
  /*                        show and hide projects modal                        */
  /* -------------------------------------------------------------------------- */

  $rxpPreview.on("click", () => {
    $projectsModal.addClass("active");
  });

  $cleanBlogPreview.on("click", () => {
    $projectsModal.addClass("active");
  });

  $2dalooPreview.on("click", () => {
    $projectsModal.addClass("active");
  });

  $closeProjectsModalBtn.on("click", () => {
    $projectsModal.removeClass("active");
  });

  /* -------------------------------------------------------------------------- */
  /*                      get experience section elements                       */
  /* -------------------------------------------------------------------------- */

  const $gaLogo = $("#ga-logo-container");
  const $challengerLogo = $("#challenger-logo-container");
  const $bareLogo = $("#bare-logo-container");

  const $gaExp = $("#ga-experience-info");
  const $challengerExp = $("#challenger-experience-info");
  const $bareExp = $("#bare-experience-info");

  /* -------------------------------------------------------------------------- */
  /*                      show and hide experience sections                     */
  /* -------------------------------------------------------------------------- */

  // define curried functions that can show/hide and experience section
  // and toggle the border-bottom to show if it is currently selected
  const hideExperience =
    ($logo: JQuery<HTMLElement>, $description: JQuery<HTMLElement>) => () => {
      $description.hide();
      $logo.css("border-bottom", "4px solid #fff");
    };
  const showExperience =
    ($logo: JQuery<HTMLElement>, $description: JQuery<HTMLElement>) => () => {
      $description.show();
      $logo.css("border-bottom", "4px solid #666666");
    };

  // store GA experience
  const showGAExperience = showExperience($gaLogo, $gaExp);
  const hideGAExperience = hideExperience($gaLogo, $gaExp);

  // store Challenger
  const showChallengerExperience = showExperience(
    $challengerLogo,
    $challengerExp
  );
  const hideChallengerExperience = hideExperience(
    $challengerLogo,
    $challengerExp
  );

  // store Bare experience
  const showBareExperience = showExperience($bareLogo, $bareExp);
  const hideBareExperience = hideExperience($bareLogo, $bareExp);

  // set event listeners to manage showing/hiding appropriate experience section
  $gaLogo.on("click", () => {
    showGAExperience();
    hideChallengerExperience();
    hideBareExperience();
  });

  $challengerLogo.on("click", () => {
    hideGAExperience();
    showChallengerExperience();
    hideBareExperience();
  });

  $bareLogo.on("click", () => {
    hideGAExperience();
    hideChallengerExperience();
    showBareExperience();
  });
});
