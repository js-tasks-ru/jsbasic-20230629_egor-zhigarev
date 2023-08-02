import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.container = this.#render();
  }

  #template(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${this.formatPrice(slide)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  #containerTemplate() {
    return `
      <div class="carousel">
      <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
        
        </div>
      </div>
    `;
  }

  #render() {
    const container = createElement(this.#containerTemplate());
    const carouselInner = container.querySelector('.carousel__inner');
    for (const slide of this.slides) {
      const elem = createElement(this.#template(slide));
      carouselInner.appendChild(elem);
    }
    this.initCarousel(container);
    return container;
  }

  get elem() {
    return this.container;
  }

  formatPrice(slide) {
    return '€' + slide.price.toFixed(2);
  }

  initCarousel(container) {
    const carouselInner = container.querySelector('.carousel__inner');
    const carouselArrowPrevious = container.querySelector('.carousel__arrow_left');
    const carouselArrowNext = container.querySelector('.carousel__arrow_right');
    // 988
    const slideWidth = 500;
    const slides = container.querySelectorAll('.carousel__slide');
    const totalSlides = slides.length;
    let currentSlide = 1;
    
    for (const currentSlide of slides) {
      currentSlide.querySelector('.carousel__button').addEventListener('click', this.onMenuClick);
    }

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

  onMenuClick = (event) => {
    const slide = event.target.closest('.carousel__slide');
    const productEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: slide.getAttribute("data-id"), // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });   
    slide.dispatchEvent(productEvent);
  }
}