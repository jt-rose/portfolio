"use strict";
$(function () {
    var $header = $("header");
    var $menuIcon = $("#menu-icon");
    $menuIcon.on("click", function (e) {
        e.preventDefault();
        $header.toggleClass("dropdown-active");
    });
});
