function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselArrowPrevious = document.querySelector('.carousel__arrow_left');
  const carouselArrowNext = document.querySelector('.carousel__arrow_right');
  const slideWidth = carouselInner.offsetWidth;
  const totalSlides = document.querySelectorAll('.carousel__slide').length;
  let currentSlide = 1;

  carouselArrowPrevious.addEventListener('click', function () {
    if (currentSlide > 1) {
      currentSlide--;
      carouselInner.style.transform = 'translateX(-' + ((currentSlide - 1) * slideWidth) + 'px)';
      carouselArrowNext.style.display = '';
      if (currentSlide == 1) {
        carouselArrowPrevious.style.display = 'none';
      }
    }
  });

  carouselArrowNext.addEventListener('click', function () {
    if (currentSlide < totalSlides) {
      currentSlide++;
      carouselInner.style.transform = 'translateX(-' + ((currentSlide - 1) * slideWidth) + 'px)';
      carouselArrowPrevious.style.display = '';
      if (currentSlide == totalSlides) {
        carouselArrowNext.style.display = 'none';
      }
    }
  });

  carouselArrowPrevious.style.display = 'none';
}