const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const navDots = Array.from(document.querySelectorAll('.navigation-dots li'));
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let imageCounter = 1;

carouselSlide.style.transform = 'translateX(-100%)';
navDots[0].style.background = 'rgba(255, 255, 255, 0.8)';

nextBtn.addEventListener('click', () => {
  if (imageCounter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter++;
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
});

prevBtn.addEventListener('click', () => {
  if (imageCounter <= 0) return;
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter--;
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[imageCounter].classList.contains('last-clone')) {
    carouselSlide.style.transition = 'none';
    imageCounter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  }

  if (carouselImages[imageCounter].classList.contains('first-clone')) {
    carouselSlide.style.transition = 'none';
    imageCounter = carouselImages.length - imageCounter;
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  }

  navDots.forEach((dot) => {
    if (navDots.indexOf(dot) === imageCounter - 1) {
      dot.style.background = 'rgba(255, 255, 255, 0.8)';
    } else {
      dot.style.background = 'transparent';
    }
  });
});

navDots.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    carouselSlide.style.transition = 'transform 400ms';
    imageCounter = 1 + navDots.indexOf(e.target);
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  });
});
