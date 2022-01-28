"use strict";
$(function () {
    /* -------------------------------------------------------------------------- */
    /*                        get projects section elements                       */
    /* -------------------------------------------------------------------------- */
    var $rxpPreview = $("#rxp-preview");
    var $projectsModal = $("#projects-modal");
    var $closeProjectsModalBtn = $("#close-projects-modal-btn");
    /* -------------------------------------------------------------------------- */
    /*                        show and hide projects modal                        */
    /* -------------------------------------------------------------------------- */
    $rxpPreview.on("click", function () {
        $projectsModal.css("display", "block");
    });
    $closeProjectsModalBtn.on("click", function () {
        $projectsModal.css("display", "none");
    });
    /* -------------------------------------------------------------------------- */
    /*                      get experience section elements                       */
    /* -------------------------------------------------------------------------- */
    var $gaLogo = $("#ga-logo-container");
    var $challengerLogo = $("#challenger-logo-container");
    var $bareLogo = $("#bare-logo-container");
    var $gaExp = $("#ga-experience-info");
    var $challengerExp = $("#challenger-experience-info");
    var $bareExp = $("#bare-experience-info");
    /* -------------------------------------------------------------------------- */
    /*                      show and hide experience sections                     */
    /* -------------------------------------------------------------------------- */
    // define curried functions that can show/hide and experience section
    // and toggle the border-bottom to show if it is currently selected
    var hideExperience = function ($logo, $description) { return function () {
        $description.hide();
        $logo.css("border-bottom", "4px solid #fff");
    }; };
    var showExperience = function ($logo, $description) { return function () {
        $description.show();
        $logo.css("border-bottom", "4px solid #666666");
    }; };
    // store GA experience
    var showGAExperience = showExperience($gaLogo, $gaExp);
    var hideGAExperience = hideExperience($gaLogo, $gaExp);
    // store Challenger
    var showChallengerExperience = showExperience($challengerLogo, $challengerExp);
    var hideChallengerExperience = hideExperience($challengerLogo, $challengerExp);
    // store Bare experience
    var showBareExperience = showExperience($bareLogo, $bareExp);
    var hideBareExperience = hideExperience($bareLogo, $bareExp);
    // set event listeners to manage showing/hiding appropriate experience section
    $gaLogo.on("click", function () {
        showGAExperience();
        hideChallengerExperience();
        hideBareExperience();
    });
    $challengerLogo.on("click", function () {
        hideGAExperience();
        showChallengerExperience();
        hideBareExperience();
    });
    $bareLogo.on("click", function () {
        hideGAExperience();
        hideChallengerExperience();
        showBareExperience();
    });
});
