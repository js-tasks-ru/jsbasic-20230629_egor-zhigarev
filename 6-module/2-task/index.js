function createElement(template) {
  const tmp = document.createElement('div');
  tmp.innerHTML = template;
  return tmp.firstElementChild;
}

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.container = this.#render();
  }

  #template() {
    return `
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">${this.formatPrice()}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `;
    
  }

  #render() {
    const elem = createElement(this.#template());    
    elem.addEventListener('click', this.#onMenuClick);
    return elem;
  }

  get elem() {
    return this.container;
  }
  
  formatPrice() {
    return '€' + this.product.price.toFixed(2);
  }

  #onMenuClick = () => {
    const event = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: this.product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });   
    this.elem.dispatchEvent(event);
  }

}