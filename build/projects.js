"use strict";
/* -------------------------------------------------------------------------- */
/*                              declare variables                             */
/* -------------------------------------------------------------------------- */
var rxpIMGPaths = [
    "./assets/projects/rxp-1.png",
    "./assets/projects/rxp-2.png",
    "./assets/projects/rxp-3.png",
];
var cleanBlogIMGPaths = [
    "./assets/projects/clean-blog-1-mobile.png",
    "./assets/projects/clean-blog-2.png",
    "./assets/projects/clean-blog-3.png",
    "./assets/projects/clean-blog-4.png",
    "./assets/projects/clean-blog-5.png",
    "./assets/projects/clean-blog-6.png",
];
var _2dalooIMGPaths = [
    "./assets/projects/2daloo-1.png",
    "./assets/projects/2daloo-2.png",
    "./assets/projects/2daloo-3.png",
    "./assets/projects/2daloo-4.png",
];
var currentIndex = 0;
var currentImageSet = rxpIMGPaths;
$(function () {
    var updateProjectImage = function () {
        currentIndex++;
        if (currentIndex >= currentImageSet.length) {
            currentIndex = 0;
        }
        $("#projects-modal-sample-img").attr("src", rxpIMGPaths[currentIndex]);
    };
    $("#projects-modal-sample-img").on("click", updateProjectImage);
});
