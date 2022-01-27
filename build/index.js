"use strict";
$(function () {
    /* -------------------------------------------------------------------------- */
    /*                              get HTML elements                             */
    /* -------------------------------------------------------------------------- */
    var $gaLogo = $("#ga-logo");
    var $challengerLogo = $("#challenger-logo");
    var $bareLogo = $("#bare-logo");
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
