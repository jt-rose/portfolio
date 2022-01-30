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
    /* -------------------------------------------------------------------------- */
    /*                        get projects section elements                       */
    /* -------------------------------------------------------------------------- */
    var $rxpPreview = $("#rxp-preview");
    var $cleanBlogPreview = $("#clean-blog-preview");
    var $2dalooPreview = $("#2daloo-preview");
    var $projectsModal = $("#projects-modal");
    var $projectsModalImage = $("#projects-modal-sample-img");
    //const $closeProjectsModalBtn = $("#close-projects-modal-btn");
    /* -------------------------------------------------------------------------- */
    /*                        show and hide projects modal                        */
    /* -------------------------------------------------------------------------- */
    $rxpPreview.on("click", function () {
        currentIndex = 0;
        currentImageSet = rxpIMGPaths;
        $projectsModalImage.attr("src", currentImageSet[0]);
        $projectsModal.addClass("active");
    });
    $cleanBlogPreview.on("click", function () {
        currentIndex = 0;
        currentImageSet = cleanBlogIMGPaths;
        $projectsModalImage.attr("src", currentImageSet[0]);
        $projectsModal.addClass("active");
    });
    $2dalooPreview.on("click", function () {
        currentIndex = 0;
        currentImageSet = _2dalooIMGPaths;
        $projectsModalImage.attr("src", currentImageSet[0]);
        $projectsModal.addClass("active");
    });
    $projectsModal.on("click", function (e) {
        if ($(e.target).is("#projects-modal")) {
            $projectsModal.removeClass("active");
        }
    });
    var updateProjectImage = function () {
        currentIndex++;
        if (currentIndex >= currentImageSet.length) {
            currentIndex = 0;
        }
        $projectsModalImage.attr("src", currentImageSet[currentIndex]);
    };
    $projectsModalImage.on("click", updateProjectImage);
});
