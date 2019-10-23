'use strict';

const runSlideshow = () => {
  const slides = document.querySelectorAll('#slideshow > img');
  const index = { value: 0 };

  const nextSlide = () => {
    slides.forEach(slide => (slide.style.opacity = 0));
    slides[index.value].style.opacity = 1;

    // If end of slide show, return to first slide.
    index.value == slides.length - 1 ? index.value = 0 : index.value++;
  };

  setInterval(() => {
    nextSlide();
  }, 5000);
};

document.addEventListener('DOMContentLoaded', () => runSlideshow(), false);