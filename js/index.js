// Your code goes here
// image mouseover and mouseout events
const contentImages = document.querySelectorAll("img");

function imgOpacity(event) {
  event.currentTarget.style.transition = "all .5s";
  event.currentTarget.style.opacity = "0.5";
}
function imgOpacityRemove(event) {
  event.currentTarget.style.transition = "all .5s";
  event.currentTarget.style.opacity = "1";
}

contentImages.forEach(img => {
  img.addEventListener("mouseover", imgOpacity);
  img.addEventListener("mouseout", imgOpacityRemove);
});
