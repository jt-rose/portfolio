/* -------------------------------------------------------------------------- */
/*                              declare variables                             */
/* -------------------------------------------------------------------------- */

interface ProjectData {
  title: string;
  description: string;
  imagePaths: string[];
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
  //const $closeProjectsModalBtn = $("#close-projects-modal-btn");

  /* -------------------------------------------------------------------------- */
  /*                        show and hide projects modal                        */
  /* -------------------------------------------------------------------------- */

  const updateModalProjectData = (projectData: ProjectData) => () => {
    currentImageIndex = 0;
    currentProjectData = projectData;
    $projectsModalTitle.text(projectData.title);
    $projectsModalDescription.text(projectData.description);
    $projectsModalImage.attr("src", projectData.imagePaths[0]);
    $projectsModal.addClass("active");
  };

  const showRXPData = updateModalProjectData(rxpData);
  const showCleanBlogData = updateModalProjectData(cleanBlogData);
  const show2dalooData = updateModalProjectData(_2dalooData);

  $rxpPreview.on("click", showRXPData);

  $cleanBlogPreview.on("click", showCleanBlogData);

  $2dalooPreview.on("click", show2dalooData);

  $projectsModal.on("click", (e) => {
    if ($(e.target).is("#projects-modal")) {
      $projectsModal.removeClass("active");
    }
  });

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
