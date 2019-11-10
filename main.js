'use strict';

const runSlideshow = () => {
  const slides = document.querySelectorAll('#slideshow > img');
  let index = 0;

  const nextSlide = () => {
    slides.forEach(slide => (slide.style.opacity = 0));
    slides[index].style.opacity = 1;

    // If end of slide show, return to first slide.
    index == slides.length - 1 ? index = 0 : index++;
  };

  setInterval(() => {
    nextSlide();
  }, 5000);
};

document.addEventListener('DOMContentLoaded', runSlideshow);