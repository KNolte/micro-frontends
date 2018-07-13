/* globals HTMLElement, window */
(function fragments() {

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
            const categoryTitle = this.getAttribute('category');
            const category = localStorage.getObject('db').filter((cat) => cat.title === categoryTitle)[0] || [];
            this.innerHTML = `
                <h3>${category.title}</h3>
                <ul>
                ${category.items.map(item => `<li>${item.title} <green-buy item-id="${item.id}"></green-buy></li>`).join('')}
                </ul>
            `;
        }

        disconnectedCallback() {
            const category = this.getAttribute('category');
        }
    }

    window.customElements.define('violet-details', VioletDetails);
}());
