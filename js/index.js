// Your code goes here
// image mouseenter and mouseleave events
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
  img.addEventListener("mouseenter", imgOpacity);
  img.addEventListener("mouseleave", imgOpacityRemove);
});

// destination mouseover, mouseout events, mousedown, mouseup events and stopPropagation
const destinationContainer = document.querySelectorAll(".destination");
const destinationButton = document.querySelectorAll(".destination .btn");

function enlarge(event) {
  event.currentTarget.style.transition = "all .5s";
  event.currentTarget.style.transform = "scale(1.1, 1.1)";
}

function enlargeRemove(event) {
  event.currentTarget.style.transition = "all .5s";
  event.currentTarget.style.transform = "scale(1, 1)";
}

function btnNormal(event) {
  event.stopPropagation();
  event.currentTarget.style.boxShadow = "0 6px #138597";
}

function btnHover(event) {
  event.stopPropagation();
  event.currentTarget.style.boxShadow = "0 4px #138597";
}

function btnPush(event) {
  event.stopPropagation();
  event.currentTarget.style.boxShadow = "0 0 #138597";
}

destinationContainer.forEach(div => {
  div.addEventListener("mouseover", enlarge);
  div.addEventListener("mouseout", enlargeRemove);
});

destinationButton.forEach(button => {
  button.addEventListener("mouseover", btnHover);
  button.addEventListener("mouseout", btnNormal);
  button.addEventListener("mousedown", btnPush);
  button.addEventListener("mouseup", btnNormal);
});

// header scroll event
