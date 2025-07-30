// Optional JavaScript functionality can go here// Scroll reveal effect using Intersection Observer
const sections = document.querySelectorAll(".hero .content");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Sticky header shrink effect on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 60) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Animate logo video on hover
const logo = document.querySelector(".logo video");
logo.addEventListener("mouseenter", () => {
  logo.play();
});
logo.addEventListener("mouseleave", () => {
  logo.pause();
  logo.currentTime = 0;
});
// Animate images on scroll
const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

images.forEach(img => {
  imageObserver.observe(img);
});
