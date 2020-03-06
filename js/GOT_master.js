(() => {
  // variables at the top -> elements on the page we ned to work with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
  lightBox = document.querySelector(".lightbox"),
  gotVideo = lightBox.querySelector("video"),
  closeLightBox = lightBox.querySelector(".lightbox-close");

// events go in the middle
function showLightbox() {
  // pop open a lightbox here and show some content
 // start with a video

// need to get the class name from the element so we can match the video source
// this.className.split()[1]; // this will strip out the house name
let targetName = this.className.split(" ")[1];
let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);

let newVideoSource = `video/House-${targetSource}.mp4`;

 lightBox.classList.add('show-lightbox');

 gotVideo.src = newVideoSource;

 gotVideo.load();
 gotVideo.play();
}

function hideLightBox() {
  lightBox.classList.remove("show-lightbox");

  gotVideo.pause();
  gotVideo.currentTime = 0;
}

// add a click event to the sigilButtons
sigilButtons.forEach(button => button.addEventListener("click", showLightbox))

// add an event handler for the lightbox close button
closeLightBox.addEventListener("click", hideLightBox);


})();
