/* -------------------------------------------------------------------------- */
/*                              declare variables                             */
/* -------------------------------------------------------------------------- */

const rxpIMGPaths = [
  "./assets/projects/rxp-1.png",
  "./assets/projects/rxp-2.png",
  "./assets/projects/rxp-3.png",
];

const cleanBlogIMGPaths = [
  "./assets/projects/clean-blog-1-mobile.png",
  "./assets/projects/clean-blog-2.png",
  "./assets/projects/clean-blog-3.png",
  "./assets/projects/clean-blog-4.png",
  "./assets/projects/clean-blog-5.png",
  "./assets/projects/clean-blog-6.png",
];

const _2dalooIMGPaths = [
  "./assets/projects/2daloo-1.png",
  "./assets/projects/2daloo-2.png",
  "./assets/projects/2daloo-3.png",
  "./assets/projects/2daloo-4.png",
];

let currentIndex = 0;
let currentImageSet = rxpIMGPaths;

$(() => {
  /* -------------------------------------------------------------------------- */
  /*                        get projects section elements                       */
  /* -------------------------------------------------------------------------- */

  const $rxpPreview = $("#rxp-preview");
  const $cleanBlogPreview = $("#clean-blog-preview");
  const $2dalooPreview = $("#2daloo-preview");
  const $projectsModal = $("#projects-modal");
  const $projectsModalImage = $("#projects-modal-sample-img");
  //const $closeProjectsModalBtn = $("#close-projects-modal-btn");

  /* -------------------------------------------------------------------------- */
  /*                        show and hide projects modal                        */
  /* -------------------------------------------------------------------------- */

  $rxpPreview.on("click", () => {
    currentIndex = 0;
    currentImageSet = rxpIMGPaths;
    $projectsModalImage.attr("src", currentImageSet[0]);
    $projectsModal.addClass("active");
  });

  $cleanBlogPreview.on("click", () => {
    currentIndex = 0;
    currentImageSet = cleanBlogIMGPaths;
    $projectsModalImage.attr("src", currentImageSet[0]);
    $projectsModal.addClass("active");
  });

  $2dalooPreview.on("click", () => {
    currentIndex = 0;
    currentImageSet = _2dalooIMGPaths;
    $projectsModalImage.attr("src", currentImageSet[0]);
    $projectsModal.addClass("active");
  });

  $projectsModal.on("click", (e) => {
    if ($(e.target).is("#projects-modal")) {
      $projectsModal.removeClass("active");
    }
  });

  const updateProjectImage = () => {
    currentIndex++;
    if (currentIndex >= currentImageSet.length) {
      currentIndex = 0;
    }
    $projectsModalImage.attr("src", currentImageSet[currentIndex]);
  };

  $projectsModalImage.on("click", updateProjectImage);
});
