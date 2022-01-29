$(() => {
  const rxpIMGPaths = [
    "./assets/projects/rxp-1.png",
    "./assets/projects/rxp-2.png",
    "./assets/projects/rxp-3.png",
  ];
  let currentIndex = 0;
  const updateProjectImage = () => {
    currentIndex++;
    if (currentIndex >= rxpIMGPaths.length) {
      currentIndex = 0;
    }
    $("#projects-modal-sample-img").attr("src", rxpIMGPaths[currentIndex]);
  };

  $("#projects-modal-sample-img").on("click", updateProjectImage);
});
