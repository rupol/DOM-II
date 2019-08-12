// Your code goes here
const contentImages = document.querySelectorAll("img");
const destinationContainer = document.querySelectorAll(".destination");
const destinationButton = document.querySelectorAll(".btn");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const footerText = document.querySelector("footer p");
const navLinks = document.querySelectorAll("nav .nav-link");
const darkModeButton = document.querySelector(".toggle-btn");
const headings = document.querySelectorAll("h2");
const logo = document.querySelector(".logo-heading");

// image mouseenter and mouseleave events
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

// destination mouseover, mouseout, mousedown, mouseup events and stopPropagation
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

// dark mode click event
body.style.background = "white";

function changeColor(elem, colorChoice) {
  // makes a given element a specified color - color must be in quotes
  return (elem.style.color = colorChoice);
}

function darkMode() {
  if (body.style.background === "white") {
    body.style.background = "black";
    header.style.background = "black";
    footer.style.background = "#6b6255";
    changeColor(body, "white");
    changeColor(footerText, "white");
    navLinks.forEach(link => {
      link.style.color = "white";
    });

    darkModeButton.textContent = "On";
  } else if (body.style.background === "black") {
    body.style.background = "white";
    header.style.background = "white";
    footer.style.background = "#ffebcd";
    changeColor(body, "black");
    changeColor(footerText, "black");
    navLinks.forEach(link => {
      link.style.color = "black";
    });

    darkModeButton.textContent = "Off";
  }
}

darkModeButton.addEventListener("click", darkMode);

// logo color scroll event
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.addEventListener("scroll", event => {
  logo.style.transition = "all .5s";
  logo.style.color = getRandomColor();
});

// nav links preventDefault
function prevDefault(event) {
  event.preventDefault();
}

navLinks.forEach(link => {
  link.addEventListener("click", prevDefault);
});
