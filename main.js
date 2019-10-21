'use strict';

const runSlideshow = () => {
  const slides = document.querySelectorAll('#slideshow > img');
  slides[0].style.opacity = 1;

  let slideIndex = 0;

  const nextSlide = () => {
    // If end of slide show, return to first slide.
    const newSlide = slideIndex == slides.length - 1 ? 0 : slideIndex + 1;
    slides.forEach(slide => (slide.style.opacity = 0));
    slides[newSlide].style.opacity = 1;
    slideIndex = newSlide;
  };

  setInterval(() => {
    nextSlide();
  }, 5000);
};

document.addEventListener('DOMContentLoaded', () => runSlideshow(), false);