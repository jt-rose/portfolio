"use strict";
$(function () {
    var rxpIMGPaths = [
        "./assets/projects/rxp-1.png",
        "./assets/projects/rxp-2.png",
        "./assets/projects/rxp-3.png",
    ];
    var currentIndex = 0;
    var updateProjectImage = function () {
        currentIndex++;
        if (currentIndex >= rxpIMGPaths.length) {
            currentIndex = 0;
        }
        $("#projects-modal-sample-img").attr("src", rxpIMGPaths[currentIndex]);
    };
    $("#projects-modal-sample-img").on("click", updateProjectImage);
});
