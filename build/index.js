"use strict";
$(function () {
    /* -------------------------------------------------------------------------- */
    /*                              get HTML elements                             */
    /* -------------------------------------------------------------------------- */
    var $gaLogo = $("#ga-logo-container");
    var $challengerLogo = $("#challenger-logo-container");
    var $bareLogo = $("#bare-logo-container");
    var $gaExp = $("#ga-experience-info");
    var $challengerExp = $("#challenger-experience-info");
    var $bareExp = $("#bare-experience-info");
    /* -------------------------------------------------------------------------- */
    /*                               site functions                               */
    /* -------------------------------------------------------------------------- */
    //
    /* -------------------------------------------------------------------------- */
    /*                             add event listeners                            */
    /* -------------------------------------------------------------------------- */
    $gaLogo.on("click", function () {
        $gaExp.show();
        $challengerExp.hide();
        $bareExp.hide();
    });
    $challengerLogo.on("click", function () {
        $gaExp.hide();
        $challengerExp.show();
        $bareExp.hide();
    });
    $bareLogo.on("click", function () {
        $gaExp.hide();
        $challengerExp.hide();
        $bareExp.show();
    });
});
