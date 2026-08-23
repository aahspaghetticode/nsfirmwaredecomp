function createControls(root, video, host) {
  var tryToPlay, controller, overlay, controlsObserver;

  tryToPlay = function () {
    if (video.error === null) {
      overlay.classList.remove("errored");
      video.play();
    } else {
      overlay.classList.add("errored");
    }
  };

  controller = document.createElement("div");
  controller.setAttribute("pseudo", "-webkit-media-controls");

  overlay = document.createElement("div");
  overlay.setAttribute("pseudo", "-webkit-media-controls-overlay");

  controller.appendChild(overlay);
  root.appendChild(controller);

  video.addEventListener("click", tryToPlay);
  video.addEventListener("keydown", function (aEvt) {
    var KEY_CODE_ENTER = 13;
    if (aEvt.keyCode === KEY_CODE_ENTER) {
      tryToPlay();
    }
  });

  controlsObserver = new MutationObserver(function () {
    controller.classList.toggle("none", !video["controls"]);
  });
  controlsObserver.observe(video, {
    attributes: true,
    attributeFilter: ["controls"],
  });
  controller.classList.toggle("none", !video["controls"]);
}
