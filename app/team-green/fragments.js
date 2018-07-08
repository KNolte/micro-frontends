/* globals HTMLElement, window, CustomEvent */
(function fragments() {
  const prices = {
    'das_paket': '15,00 €',
    'fifty_shades_of_grey': '18,00 €',
    'vergiss_mein_nicht': '12,00 €'
  };

  const state = {
    count: 0,
  };

  class GreenShoppingCart extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    refresh() {
      this.render();
    }
    render() {
      const classname = state.count === 0 ? 'empty' : 'filled';
      this.innerHTML = `
        <div class="${classname}">basket: ${state.count} item(s)</div>
      `;
    }
    disconnectedCallback() {
    }
  }
  window.customElements.define('green-shopping-cart', GreenShoppingCart);


  class GreenBuy extends HTMLElement {
    static get observedAttributes() {
      return ['item'];
    }
    render() {
      const item = this.getAttribute('item');
      const price = prices[item];
      this.innerHTML = `<button type="button">buy for ${price}</button>`;
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      this.render();
    }
    disconnectedCallback() {
      this.firstChild.removeEventListener('click', this.addToCart);
      const item = this.getAttribute('item');
    }
  }
  window.customElements.define('green-buy', GreenBuy);
}());
