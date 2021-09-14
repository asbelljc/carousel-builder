const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 1;

carouselSlide.style.transform = 'translateX(-100%)';

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 400ms';
  counter++;
  carouselSlide.style.transform = `translateX(-${100 * counter}%)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 400ms';
  counter--;
  carouselSlide.style.transform = `translateX(-${100 * counter}%)`;
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].classList.contains('last-clone')) {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(-${100 * counter}%)`;
  }
  if (carouselImages[counter].classList.contains('first-clone')) {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(-${100 * counter}%)`;
  }
});
