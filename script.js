const carouselFrame = document.querySelector('.carousel-frame');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const navDots = Array.from(document.querySelectorAll('.carousel-dots li'));

let imageCounter = 1;

function initializeNavDots() {
  if (navDots.length) navDots[0].classList.add('active-dot');
}

function initializeCarousel() {
  carouselSlide.style.transform = 'translateX(-100%)';
}

function slideForward() {
  // first limit counter to prevent fast-change bugs
  if (imageCounter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter++;
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
}

function slideBack() {
  // first limit counter to prevent fast-change bugs
  if (imageCounter <= 0) return;
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter--;
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
}

function makeLoop() {
  // instantly move from clones to originals to produce 'infinite-loop' effect
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
}

function goToImage(e) {
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter = 1 + navDots.indexOf(e.target);
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
}

function highlightCurrentDot() {
  navDots.forEach((dot) => {
    if (navDots.indexOf(dot) === imageCounter - 1) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}

function addBtnListeners() {
  nextBtn.addEventListener('click', slideForward);
  prevBtn.addEventListener('click', slideBack);
}

function addNavDotListeners() {
  navDots.forEach((dot) => {
    dot.addEventListener('click', goToImage);
  });
}

function addTransitionListener() {
  carouselSlide.addEventListener('transitionend', () => {
    makeLoop();
    highlightCurrentDot();
  });
}

function autoAdvance() {
  let play = setInterval(slideForward, 5000);
  carouselFrame.addEventListener('mouseover', () => {
    console.log('hey');
    clearInterval(play);
  });
  carouselFrame.addEventListener('mouseout', () => {
    console.log('hi');
    play = setInterval(slideForward, 5000);
  });
}

function buildCarousel() {
  initializeCarousel();
  initializeNavDots();
  addNavDotListeners();
  addBtnListeners();
  autoAdvance();
  addTransitionListener();
}

buildCarousel();
