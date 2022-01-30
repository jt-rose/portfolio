/* -------------------------------------------------------------------------- */
/*                             store project data                             */
/* -------------------------------------------------------------------------- */
interface ProjectData {
  title: string;
  description: string;
  imagePaths: string[];
  projectLink: string | null; // url may be null if project is server / utility
  githubLink: string;
  // classNameForSkills - look for li skill logo elements
  // with this class, set display on, then revert to hidden
  // when closing modal
}

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
};

const cleanBlogData: ProjectData = {
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
};

const _2dalooData: ProjectData = {
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
  const $projectsModal = $("#projects-modal");
  const $projectsModalTitle = $("#projects-modal-title");
  const $projectsModalDescription = $("#projects-modal-description");
  const $projectsModalImage = $("#projects-modal-sample-img");
  const $projectsModalWebsiteURL = $("#website-url");
  const $urlSpace = $("#url-space");
  const $projectsModalGithubURL = $("#github-url");
  //const $closeProjectsModalBtn = $("#close-projects-modal-btn");

  /* -------------------------------------------------------------------------- */
  /*                   update DOM to show project descriptions                  */
  /* -------------------------------------------------------------------------- */

  // use project data to update what data is currently being shown
  // in the projects modal
  const updateModalProjectData = (projectData: ProjectData) => () => {
    currentImageIndex = 0;
    currentProjectData = projectData;
    $projectsModalTitle.text(projectData.title);
    $projectsModalDescription.text(projectData.description);
    $projectsModalImage.attr("src", projectData.imagePaths[0]);
    if (projectData.projectLink) {
      $projectsModalWebsiteURL.attr("href", projectData.projectLink).show();
      $urlSpace.show();
    } else {
      $projectsModalWebsiteURL.hide();
      $urlSpace.hide();
    }
    $projectsModalGithubURL.attr("href", projectData.githubLink);
    $projectsModal.addClass("active");
  };

  // store different project's data
  const showRXPData = updateModalProjectData(rxpData);
  const showCleanBlogData = updateModalProjectData(cleanBlogData);
  const show2dalooData = updateModalProjectData(_2dalooData);

  // align project data with project preview
  $rxpPreview.on("click", showRXPData);
  $cleanBlogPreview.on("click", showCleanBlogData);
  $2dalooPreview.on("click", show2dalooData);

  // remove modal when clicking outside of active area
  $projectsModal.on("click", (e) => {
    if ($(e.target).is("#projects-modal")) {
      $projectsModal.removeClass("active");
    }
  });

  // update modal image to next in set when clicking on images
  const updateProjectImage = () => {
    currentImageIndex++;
    if (currentImageIndex >= currentProjectData.imagePaths.length) {
      currentImageIndex = 0;
    }
    $projectsModalImage.attr(
      "src",
      currentProjectData.imagePaths[currentImageIndex]
    );
  };

  $projectsModalImage.on("click", updateProjectImage);
});
