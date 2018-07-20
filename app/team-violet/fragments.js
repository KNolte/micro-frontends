/* globals HTMLElement, window */
(function fragments() {

    class VioletDetails extends HTMLElement {
        static get observedAttributes() {
            return ['category'];
        }

        connectedCallback() {
            this.render();
        }

        attributeChangedCallback(attr, oldValue, newValue) {
            this.render();
        }

        render() {
            const categoryTitle = this.getAttribute('category');
            const items = localStorage.getObject('items').filter((item) => item.category === categoryTitle) || [];
            this.innerHTML = `
                <h3>${categoryTitle}</h3>
                <div class="items">
                    ${items.map(item => `
                        <div class="item">
                            <h4>${item.title}</h4>
                            <img src="${item.thumb_url}"/>
                            <green-buy item-id="${item.id}"></green-buy>
                        </div>`).join('')}
                </div>
            `;
        }

        disconnectedCallback() {
            const category = this.getAttribute('category');
        }
    }

    window.customElements.define('violet-details', VioletDetails);
}());
