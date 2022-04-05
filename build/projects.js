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
    title: "Clean Blog <React>",
    description: "A React conversion of the popular Start Bootstrap Blog template that uses NextJS for static site generation",
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
    description: "A clean task tracking app with sorting, filtering, and categorizing features",
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
var joybeeData = {
    title: "Joybee",
    description: "A social hub for language exchange, where users can connect, schedule meetups, and message one another",
    imagePaths: [
        "./assets/projects/joybee-4.png",
        "./assets/projects/joybee-1.png",
        "./assets/projects/joybee-2.png",
        "./assets/projects/joybee-3.png",
    ],
    projectLink: "https://www.joybee.app/",
    githubLink: "https://github.com/jt-rose/joybee",
    classNameForSkills: "joybee",
};
var gameDocsData = {
    title: "Game Docs",
    description: "A fullstack app that allows game developers to create, edit, and collaborate on Game Design Documents (GDD)",
    imagePaths: [
        "./assets/projects/gamedocs-1.png",
        "./assets/projects/gamedocs-2.png",
        "./assets/projects/gamedocs-3.png",
        "./assets/projects/gamedocs-4.png",
    ],
    projectLink: "https://www.gamedocs.app",
    githubLink: "https://github.com/jt-rose/gdd-client",
    classNameForSkills: "gamedocs",
};
var bookcastData = {
    title: "Bookcast",
    description: 'A fullstack app where users can create "Fancasts" where they pick actors for film adaptations as well as view, comment, and vote on other fancasts',
    imagePaths: [
        "./assets/projects/bookcast-1.png",
        "./assets/projects/bookcast-2.png",
        "./assets/projects/bookcast-3.png",
        "./assets/projects/bookcast-4.png",
    ],
    projectLink: "https://www.bookcast.herokuapp.com",
    githubLink: "https://github.com/jt-rose/bookcast-client",
    classNameForSkills: "bookcast",
};
var hemmingwayData = {
    title: "Hemmingway",
    description: "A fullstack health and fitness tracking app with automated calorie calculations and data visualization",
    imagePaths: [
        "./assets/projects/hemmingway-1.png",
        "./assets/projects/hemmingway-2.png",
        "./assets/projects/hemmingway-3.png",
        "./assets/projects/hemmingway-4.png",
        "./assets/projects/hemmingway-5.png",
        "./assets/projects/hemmingway-6.png",
    ],
    projectLink: "https://www.hemmingway.app",
    githubLink: "https://github.com/jt-rose/hemmingway-frontend",
    classNameForSkills: "hemmingway",
};
// servers
var vgSalesData = {
    title: "VG-Sales",
    description: "A GraphQL server / PostgreSQL database enabling users to dynamically query the history of video game sales across years, genres, consoles, etc.",
    imagePaths: ["./assets/projects/vg-sales.png"],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/vg_sales_server",
    classNameForSkills: "vg-sales",
};
var cleanBlogServerData = {
    title: "Clean Blog Server",
    description: "A Golang / GraphQL server managing the database for a blog CMS",
    imagePaths: ["./assets/projects/clean-blog-server.png"],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/clean_blog_server",
    classNameForSkills: "clean-blog-server",
};
var chMeetingsData = {
    title: "CH Meetings",
    description: "A backend server and database to manage sales enablement programs through scheduling eLearning and training workshops",
    imagePaths: ["./assets/projects/ch-meetings.png"],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/ch_meetings_server",
    classNameForSkills: "ch-meetings",
};
// utilities
var sudokioData = {
    title: "Sudokio",
    description: "A CLI that solves sudoku puzzles by imitating human strategies, storing detailed data on turn-by-turn solutions to guide the user",
    imagePaths: [],
    projectLink: null,
    githubLink: "https://github.com/jt-rose/sudokio_cli",
    classNameForSkills: "sudokio",
};
var rxpNPMData = {
    title: "RXP",
    description: "An NPM library that makes it easy to read, write, and modify regular expressions",
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
    var $joybeePreview = $("#joybee-preview");
    var $gamedocsPreview = $("#gamedocs-preview");
    var $bookcastPreview = $("#bookcast-preview");
    var $hemmingwayPreview = $("#hemmingway-preview");
    var $projectsModal = $("#projects-modal");
    var $projectsModalTitle = $("#projects-modal-title");
    var $projectsModalDescription = $("#projects-modal-description");
    var $projectsModalImage = $("#projects-modal-sample-img");
    var $projectImageLinks = $("#project-image-links");
    var $projectsModalWebsiteURL = $("#website-url");
    var $urlSpace = $("#url-space");
    var $projectsModalGithubURL = $("#github-url");
    var $closeProjectsModalButtons = $(".close-modal-btn");
    /* -------------------------------------------------------------------------- */
    /*                   update DOM to show project descriptions                  */
    /* -------------------------------------------------------------------------- */
    // set all skill logos on model to be hidden by default
    $("#project-skills-used li").hide();
    // use project data to update what data is currently being shown
    // in the projects modal
    var updateModalProjectData = function (projectData) { return function () {
        // reset image index and image set
        currentImageIndex = 0;
        currentProjectData = projectData;
        // format project info based on project data object
        $projectsModalTitle.text(projectData.title);
        $projectsModalDescription.text(projectData.description);
        $projectsModalImage.attr("src", projectData.imagePaths[0]);
        // if there is more than one image, create bullet navigation
        if (projectData.imagePaths.length > 1) {
            var _loop_1 = function (i) {
                var $link = $("<li>").append("<div>");
                $link.on("click", function () {
                    $projectsModalImage.attr("src", projectData.imagePaths[i]);
                    $projectImageLinks
                        .children()
                        .children()
                        .css("background-color", "#004953");
                    $link.children().css("background-color", "#20b2aa");
                });
                if (i === 0) {
                    $link.children().css("background-color", "#20b2aa");
                }
                else {
                    $link.children().css("background-color", "#004953");
                }
                $projectImageLinks.append($link);
            };
            for (var i = 0; i < projectData.imagePaths.length; i++) {
                _loop_1(i);
            }
        }
        // show relevant skills for that project
        $(".".concat(projectData.classNameForSkills)).show();
        // if frontend project, share url
        if (projectData.projectLink) {
            $projectsModalWebsiteURL
                .attr("href", projectData.projectLink)
                .attr("target", "_blank")
                .show();
            $urlSpace.show();
        }
        else {
            $projectsModalWebsiteURL.hide();
            $urlSpace.hide();
        }
        // show github link
        $projectsModalGithubURL
            .attr("href", projectData.githubLink)
            .attr("target", "_blank");
        $projectsModal.addClass("active");
    }; };
    // store different project's data
    var showRXPData = updateModalProjectData(rxpData);
    var showCleanBlogData = updateModalProjectData(cleanBlogData);
    var show2dalooData = updateModalProjectData(_2dalooData);
    var showJoybeeData = updateModalProjectData(joybeeData);
    var showGameDocsData = updateModalProjectData(gameDocsData);
    var showBookcastData = updateModalProjectData(bookcastData);
    var showHemmingwayData = updateModalProjectData(hemmingwayData);
    var showVGSalesData = updateModalProjectData(vgSalesData);
    var showCHMeetingsData = updateModalProjectData(chMeetingsData);
    var showCleanBlogServerData = updateModalProjectData(cleanBlogServerData);
    // align project data with project preview
    $rxpPreview.on("click", showRXPData);
    $cleanBlogPreview.on("click", showCleanBlogData);
    $2dalooPreview.on("click", show2dalooData);
    $joybeePreview.on("click", showJoybeeData);
    $gamedocsPreview.on("click", showGameDocsData);
    $bookcastPreview.on("click", showBookcastData);
    $hemmingwayPreview.on("click", showHemmingwayData);
    $vgSalesPreview.on("click", showVGSalesData);
    $chMeetingsPreview.on("click", showCHMeetingsData);
    $cleanBlogServerPreview.on("click", showCleanBlogServerData);
    // remove modal when clicking outside of active area
    var removeModal = function () {
        $projectsModal.removeClass("active");
        $projectImageLinks.children().remove();
        $("#project-skills-used li").hide();
    };
    $projectsModal.on("click", function (e) {
        if ($(e.target).is("#projects-modal")) {
            removeModal();
        }
    });
    $closeProjectsModalButtons.on("click", removeModal);
    // update modal image to next in set when clicking on images
    var updateProjectImage = function () {
        if (currentProjectData.imagePaths.length > 1) {
            currentImageIndex++;
            if (currentImageIndex >= currentProjectData.imagePaths.length) {
                currentImageIndex = 0;
            }
            $projectsModalImage.attr("src", currentProjectData.imagePaths[currentImageIndex]);
            var $currentImgLinks = $("li div");
            $currentImgLinks.css("background-color", "#004953");
            $currentImgLinks.eq(currentImageIndex).css("background-color", "#20b2aa");
        }
    };
    $projectsModalImage.on("click", updateProjectImage);
});
