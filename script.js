let videos = ["sample.mp4", "sample2.mp4", "sample3.mp4"]; // Add more video file names here
let current = 0;

const videoEl = document.querySelector("video");

function showVideo(index) {
  if (index >= 0 && index < videos.length) {
    videoEl.src = videos[index];
    videoEl.play();
  }
}

document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    current = (current + 1) % videos.length;
  } else {
    current = (current - 1 + videos.length) % videos.length;
  }
  showVideo(current);
});
