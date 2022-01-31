"use strict";
$(function () {
    // get header/ navbar element and menu icon (visible on mobile)
    var $header = $("header");
    var $menuIcon = $("#menu-icon");
    // open or close the menu based on current state
    // and animate the transition
    var animateMenuToggle = function () {
        var windowWidth = $(window).width();
        if (windowWidth && windowWidth < 610) {
            $header.css("transition", "0.7s");
            if ($header.hasClass("dropdown-active")) {
                $menuIcon.children().removeClass("fa-times").addClass("fa-bars");
            }
            else {
                $menuIcon.children().removeClass("fa-bars").addClass("fa-times");
            }
            $header.toggleClass("dropdown-active");
            setTimeout(function () {
                $header.css("transition", "0");
            }, 700);
        }
    };
    // apply menuToggle animation to all section links
    $("nav a")
        .filter(function (index) { return index !== 5; })
        .on("click", animateMenuToggle);
    // for menu/ cancel icon, disable the section link
    // and only animate the menu opening and closing
    $menuIcon.on("click", function (e) {
        e.preventDefault();
        animateMenuToggle();
    });
});
