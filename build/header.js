"use strict";
$(function () {
    var $header = $("header");
    var $menuIcon = $("#menu-icon");
    $menuIcon.on("click", function (e) {
        e.preventDefault();
        if ($header.hasClass("dropdown-active")) {
            $menuIcon.children().removeClass("fa-times").addClass("fa-bars");
        }
        else {
            $menuIcon.children().removeClass("fa-bars").addClass("fa-times");
        }
        $header.toggleClass("dropdown-active");
    });
});
