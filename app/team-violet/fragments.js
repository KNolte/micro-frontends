/* globals HTMLElement, window */
(function fragments() {
  const categories = {
    books: [{title: 'Das Paket', id: 'das_paket'}],
    films: [{title: 'Fifty Shades of Grey', id: 'fifty_shades_of_grey'}],
    music: [{title: 'Vergiss mein nicht', id: 'vergiss_mein_nicht'}]
  };

  class VioletDetails extends HTMLElement {
    static get observedAttributes() {
        return ['category'];
    }
    connectedCallback() {
      const category = this.getAttribute('category');
      this.render();
    }
    attributeChangedCallback(attr, oldValue, newValue) {
      this.render();
    }
    render() {
      const category = this.getAttribute('category');
      const items = categories[category] || [];
      this.innerHTML = `
        <h3>${category}</h3>
        <ul>
        ${items.map(item => `<li>${item.title} <green-buy item="${item.id}"></green-buy></li>`).join('')}
        </ul>
      `;
    }
    disconnectedCallback() {
      const category = this.getAttribute('category');
    }
  }
  window.customElements.define('violet-details', VioletDetails);
}());
