/* -------------------------------------------------------------------------- */
/*                             store project data                             */
/* -------------------------------------------------------------------------- */
interface ProjectData {
  title: string;
  description: string;
  imagePaths: string[];
  projectLink: string | null; // url may be null if project is server / utility
  githubLink: string;
  classNameForSkills: string; // look for li skill logo elements
  // with this class, set display on, then revert to hidden
  // when closing modal
}

// frontends
const rxpData: ProjectData = {
  title: "RXP",
  description:
    "RXP is an NPM library that aims to make regex easy to read, write, and modify. The RXP website provides full documentation, a regex cheat sheet, and a live code playground.",
  imagePaths: [
    "./assets/projects/rxp-1.png",
    "./assets/projects/rxp-2.png",
    "./assets/projects/rxp-3.png",
  ],
  projectLink: "https://rxp.dev",
  githubLink: "https://github.com/jt-rose/rxp-site",
  classNameForSkills: "rxp",
};

const cleanBlogData: ProjectData = {
  title: "Clean Blog <React>",
  description:
    "A React conversion of the popular Start Bootstrap Blog template that uses NextJS for static site generation",
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

const _2dalooData: ProjectData = {
  title: "2daloo",
  description:
    "A clean task tracking app with sorting, filtering, and categorizing features",
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
const vgSalesData: ProjectData = {
  title: "VG-Sales",
  description:
    "A GraphQL server / PostgreSQL database enabling users to dynamically query the history of video game sales across years, genres, consoles, etc.",
  imagePaths: ["./assets/projects/vg-sales.png"],
  projectLink: null,
  githubLink: "https://github.com/jt-rose/vg_sales_server",
  classNameForSkills: "vg-sales",
};

const cleanBlogServerData: ProjectData = {
  title: "Clean Blog Server",
  description: "A Golang / GraphQL server managing the database for a blog CMS",
  imagePaths: ["./assets/projects/clean-blog-server.png"],
  projectLink: null,
  githubLink: "https://github.com/jt-rose/clean_blog_server",
  classNameForSkills: "clean-blog-server",
};

const chMeetingsData: ProjectData = {
  title: "CH Meetings",
  description:
    "A backend server and database to manage sales enablement programs through scheduling eLearning and training workshops",
  imagePaths: ["./assets/projects/ch-meetings.png"],
  projectLink: null,
  githubLink: "https://github.com/jt-rose/ch_meetings_server",
  classNameForSkills: "ch-meetings",
};
// utilities
const sudokioData: ProjectData = {
  title: "Sudokio",
  description:
    "A CLI that solves sudoku puzzles by imitating human strategies, storing detailed data on turn-by-turn solutions to guide the user",
  imagePaths: [],
  projectLink: null,
  githubLink: "https://github.com/jt-rose/sudokio_cli",
  classNameForSkills: "sudokio",
};

const rxpNPMData: ProjectData = {
  title: "RXP",
  description:
    "An NPM library that makes it easy to read, write, and modify regular expressions",
  imagePaths: [],
  projectLink: "https://www.npmjs.com/package/rxp", // NPM link
  githubLink: "https://github.com/jt-rose/rxp",
  classNameForSkills: "rxp-npm",
};

let currentImageIndex = 0;
let currentProjectData: ProjectData = rxpData;

// wait until DOM is loaded
$(() => {
  /* -------------------------------------------------------------------------- */
  /*                        get projects section elements                       */
  /* -------------------------------------------------------------------------- */

  const $rxpPreview = $("#rxp-preview");
  const $cleanBlogPreview = $("#clean-blog-preview");
  const $2dalooPreview = $("#2daloo-preview");
  const $vgSalesPreview = $("#vg-sales-preview");
  const $chMeetingsPreview = $("#ch-meetings-preview");
  const $cleanBlogServerPreview = $("#clean-blog-server-preview");

  const $projectsModal = $("#projects-modal");
  const $projectsModalTitle = $("#projects-modal-title");
  const $projectsModalDescription = $("#projects-modal-description");
  const $projectsModalImage = $("#projects-modal-sample-img");
  const $projectImageLinks = $("#project-image-links");
  const $projectsModalWebsiteURL = $("#website-url");
  const $urlSpace = $("#url-space");
  const $projectsModalGithubURL = $("#github-url");
  const $closeProjectsModalButtons = $(".close-modal-btn");

  /* -------------------------------------------------------------------------- */
  /*                   update DOM to show project descriptions                  */
  /* -------------------------------------------------------------------------- */

  // set all skill logos on model to be hidden by default
  $("#project-skills-used li").hide();

  // use project data to update what data is currently being shown
  // in the projects modal
  const updateModalProjectData = (projectData: ProjectData) => () => {
    // reset image index and image set
    currentImageIndex = 0;
    currentProjectData = projectData;

    // format project info based on project data object
    $projectsModalTitle.text(projectData.title);
    $projectsModalDescription.text(projectData.description);
    $projectsModalImage.attr("src", projectData.imagePaths[0]);

    // if there is more than one image, create bullet navigation
    if (projectData.imagePaths.length > 1) {
      for (let i = 0; i < projectData.imagePaths.length; i++) {
        const $link = $("<li>").append("<div>");
        $link.on("click", () => {
          $projectsModalImage.attr("src", projectData.imagePaths[i]);
          $projectImageLinks
            .children()
            .children()
            .css("background-color", "#004953");
          $link.children().css("background-color", "#20b2aa");
        });
        if (i === 0) {
          $link.children().css("background-color", "#20b2aa");
        } else {
          $link.children().css("background-color", "#004953");
        }
        $projectImageLinks.append($link);
      }
    }

    // show relevant skills for that project
    $(`.${projectData.classNameForSkills}`).show();

    // if frontend project, share url
    if (projectData.projectLink) {
      $projectsModalWebsiteURL.attr("href", projectData.projectLink).show();
      $urlSpace.show();
    } else {
      $projectsModalWebsiteURL.hide();
      $urlSpace.hide();
    }

    // show github link
    $projectsModalGithubURL.attr("href", projectData.githubLink);
    $projectsModal.addClass("active");
  };

  // store different project's data
  const showRXPData = updateModalProjectData(rxpData);
  const showCleanBlogData = updateModalProjectData(cleanBlogData);
  const show2dalooData = updateModalProjectData(_2dalooData);

  const showVGSalesData = updateModalProjectData(vgSalesData);
  const showCHMeetingsData = updateModalProjectData(chMeetingsData);
  const showCleanBlogServerData = updateModalProjectData(cleanBlogServerData);

  // align project data with project preview
  $rxpPreview.on("click", showRXPData);
  $cleanBlogPreview.on("click", showCleanBlogData);
  $2dalooPreview.on("click", show2dalooData);

  $vgSalesPreview.on("click", showVGSalesData);
  $chMeetingsPreview.on("click", showCHMeetingsData);
  $cleanBlogServerPreview.on("click", showCleanBlogServerData);

  // remove modal when clicking outside of active area
  const removeModal = () => {
    $projectsModal.removeClass("active");
    $projectImageLinks.children().remove();
    $("#project-skills-used li").hide();
  };
  $projectsModal.on("click", (e) => {
    if ($(e.target).is("#projects-modal")) {
      removeModal();
    }
  });

  $closeProjectsModalButtons.on("click", removeModal);

  // update modal image to next in set when clicking on images
  const updateProjectImage = () => {
    if (currentProjectData.imagePaths.length > 1) {
      currentImageIndex++;
      if (currentImageIndex >= currentProjectData.imagePaths.length) {
        currentImageIndex = 0;
      }
      $projectsModalImage.attr(
        "src",
        currentProjectData.imagePaths[currentImageIndex]
      );
      const $currentImgLinks = $("li div");
      $currentImgLinks.css("background-color", "#004953");
      $currentImgLinks.eq(currentImageIndex).css("background-color", "#20b2aa");
    }
  };

  $projectsModalImage.on("click", updateProjectImage);
});
