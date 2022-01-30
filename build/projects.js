"use strict";
/* -------------------------------------------------------------------------- */
/*                              declare variables                             */
/* -------------------------------------------------------------------------- */
var rxpData = {
    title: "RXP",
    description: "RXP is an NPM library that aims to make regex easy to read, write, and modify. The RXP website provides full documentation, a regex cheat sheet, and a live code playground.",
    imagePaths: [
        "./assets/projects/rxp-1.png",
        "./assets/projects/rxp-2.png",
        "./assets/projects/rxp-3.png",
    ],
};
var cleanBlogData = {
    title: "Clean Blog",
    description: "lorem ipsum",
    imagePaths: [
        "./assets/projects/clean-blog-1-mobile.png",
        "./assets/projects/clean-blog-2.png",
        "./assets/projects/clean-blog-3.png",
        "./assets/projects/clean-blog-4.png",
        "./assets/projects/clean-blog-5.png",
        "./assets/projects/clean-blog-6.png",
    ],
};
var _2dalooData = {
    title: "2daloo",
    description: "lorem ipsum ...",
    imagePaths: [
        "./assets/projects/2daloo-1.png",
        "./assets/projects/2daloo-2.png",
        "./assets/projects/2daloo-3.png",
        "./assets/projects/2daloo-4.png",
    ],
};
var currentImageIndex = 0;
var currentProjectData = rxpData;
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
        currentImageIndex = 0;
        currentProjectData = rxpData;
        $projectsModalImage.attr("src", currentProjectData.imagePaths[0]);
        $projectsModal.addClass("active");
    });
    $cleanBlogPreview.on("click", function () {
        currentImageIndex = 0;
        currentProjectData = cleanBlogData;
        $projectsModalImage.attr("src", currentProjectData.imagePaths[0]);
        $projectsModal.addClass("active");
    });
    $2dalooPreview.on("click", function () {
        currentImageIndex = 0;
        currentProjectData = _2dalooData;
        $projectsModalImage.attr("src", currentProjectData.imagePaths[0]);
        $projectsModal.addClass("active");
    });
    $projectsModal.on("click", function (e) {
        if ($(e.target).is("#projects-modal")) {
            $projectsModal.removeClass("active");
        }
    });
    var updateProjectImage = function () {
        currentImageIndex++;
        if (currentImageIndex >= currentProjectData.imagePaths.length) {
            currentImageIndex = 0;
        }
        $projectsModalImage.attr("src", currentProjectData.imagePaths[currentImageIndex]);
    };
    $projectsModalImage.on("click", updateProjectImage);
});
