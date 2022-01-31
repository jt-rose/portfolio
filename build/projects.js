"use strict";
// frontends
var rxpData = {
    title: "RXP",
    description: "RXP is an NPM library that aims to make regex easy to read, write, and modify. The RXP website provides full documentation, a regex cheat sheet, and a live code playground.",
    imagePaths: [
        "./assets/projects/rxp-1.png",
        "./assets/projects/rxp-2.png",
        "./assets/projects/rxp-3.png",
    ],
    projectLink: "https://rxp.dev",
    githubLink: "https://github.com/jt-rose/rxp-site",
    classNameForSkills: "rxp",
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
    projectLink: "https://clean-blog-react.vercel.app",
    githubLink: "https://github.com/jt-rose/clean_blog_react",
    classNameForSkills: "clean-blog",
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
    projectLink: "https://jt-rose.github.io/2daloo/#/",
    githubLink: "https://github.com/jt-rose/2daloo",
    classNameForSkills: "2daloo",
};
// servers
var vgSalesData = {
    title: "VG-Sales",
    description: "lorme ipsum",
    imagePaths: ["./assets/projects/vg-sales.png"],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/vg_sales_server",
    classNameForSkills: "vg-sales",
};
var cleanBlogServerData = {
    title: "Clean Blog Server",
    description: "lorem ipsum",
    imagePaths: ["./assets/projects/clean-blog-server.png"],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/clean_blog_server",
    classNameForSkills: "clean-blog-server",
};
var chMeetingsData = {
    title: "CH Meetings",
    description: "lorem ipsum",
    imagePaths: ["./assets/projects/ch-meetings.png"],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/ch_meetings_server",
    classNameForSkills: "ch-meetings",
};
// utilities
var sudokioData = {
    title: "Sudokio",
    description: "lorem ipsum",
    imagePaths: [],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/sudokio_cli",
    classNameForSkills: "sudokio",
};
var rxpNPMData = {
    title: "RXP",
    description: "lorem ipsum",
    imagePaths: [],
    projectLink: "https://www.npmjs.com/package/rxp",
    githubLink: "https://github.com/jt-rose/rxp",
    classNameForSkills: "rxp-npm",
};
var currentImageIndex = 0;
var currentProjectData = rxpData;
// wait until DOM is loaded
$(function () {
    /* -------------------------------------------------------------------------- */
    /*                        get projects section elements                       */
    /* -------------------------------------------------------------------------- */
    var $rxpPreview = $("#rxp-preview");
    var $cleanBlogPreview = $("#clean-blog-preview");
    var $2dalooPreview = $("#2daloo-preview");
    var $vgSalesPreview = $("#vg-sales-preview");
    var $chMeetingsPreview = $("#ch-meetings-preview");
    var $cleanBlogServerPreview = $("#clean-blog-server-preview");
    var $projectsModal = $("#projects-modal");
    var $projectsModalTitle = $("#projects-modal-title");
    var $projectsModalDescription = $("#projects-modal-description");
    var $projectsModalImage = $("#projects-modal-sample-img");
    var $projectImageLinks = $("#project-image-links");
    var $projectsModalWebsiteURL = $("#website-url");
    var $urlSpace = $("#url-space");
    var $projectsModalGithubURL = $("#github-url");
    //const $closeProjectsModalBtn = $("#close-projects-modal-btn");
    /* -------------------------------------------------------------------------- */
    /*                   update DOM to show project descriptions                  */
    /* -------------------------------------------------------------------------- */
    // set all skill logos on model to be hidden by default
    $("#project-skills-used li").hide();
    // use project data to update what data is currently being shown
    // in the projects modal
    var updateModalProjectData = function (projectData) { return function () {
        currentImageIndex = 0;
        currentProjectData = projectData;
        $projectsModalTitle.text(projectData.title);
        $projectsModalDescription.text(projectData.description);
        $projectsModalImage.attr("src", projectData.imagePaths[0]);
        var _loop_1 = function (i) {
            var $link = $("<li>").append("<div>");
            //const $bullet = $('<div>').appendTo($link)
            $link.on("click", function () {
                $projectsModalImage.attr("src", projectData.imagePaths[i]);
                $projectImageLinks
                    .children()
                    .children()
                    .css("background-color", "black");
                $link.children().css("background-color", "red");
            });
            $projectImageLinks.append($link);
        };
        for (var i = 0; i < projectData.imagePaths.length; i++) {
            _loop_1(i);
        }
        $(".".concat(projectData.classNameForSkills)).show();
        if (projectData.projectLink) {
            $projectsModalWebsiteURL.attr("href", projectData.projectLink).show();
            $urlSpace.show();
        }
        else {
            $projectsModalWebsiteURL.hide();
            $urlSpace.hide();
        }
        $projectsModalGithubURL.attr("href", projectData.githubLink);
        $projectsModal.addClass("active");
    }; };
    // store different project's data
    var showRXPData = updateModalProjectData(rxpData);
    var showCleanBlogData = updateModalProjectData(cleanBlogData);
    var show2dalooData = updateModalProjectData(_2dalooData);
    var showVGSalesData = updateModalProjectData(vgSalesData);
    var showCHMeetingsData = updateModalProjectData(chMeetingsData);
    var showCleanBlogServerData = updateModalProjectData(cleanBlogServerData);
    // align project data with project preview
    $rxpPreview.on("click", showRXPData);
    $cleanBlogPreview.on("click", showCleanBlogData);
    $2dalooPreview.on("click", show2dalooData);
    $vgSalesPreview.on("click", showVGSalesData);
    $chMeetingsPreview.on("click", showCHMeetingsData);
    $cleanBlogServerPreview.on("click", showCleanBlogServerData);
    // remove modal when clicking outside of active area
    $projectsModal.on("click", function (e) {
        if ($(e.target).is("#projects-modal")) {
            $projectsModal.removeClass("active");
            $projectImageLinks.children().remove();
            $("#project-skills-used li").hide();
        }
    });
    // update modal image to next in set when clicking on images
    var updateProjectImage = function () {
        currentImageIndex++;
        if (currentImageIndex >= currentProjectData.imagePaths.length) {
            currentImageIndex = 0;
        }
        $projectsModalImage.attr("src", currentProjectData.imagePaths[currentImageIndex]);
    };
    $projectsModalImage.on("click", updateProjectImage);
});
