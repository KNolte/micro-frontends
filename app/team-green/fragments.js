/* globals HTMLElement, window, CustomEvent */
(function fragments() {

    const state = {
        items: []
    };

    class GreenShoppingCart extends HTMLElement {
        connectedCallback() {
            this.refresh = this.refresh.bind(this);
            this.render();
            window.addEventListener('green:cart:changed', this.refresh);
        }

        refresh() {
            this.render();
        }

        render() {
            let items = localStorage.getObject('items').filter((item) => state.items.indexOf(item.id) !== -1)

            this.innerHTML = '<h3>ShoppingCart</h3>';
            for (let item of items) {
                this.innerHTML += `${item.title} ${item.price}</br>`;
            }
        }

        disconnectedCallback() {
            window.removeEventListener('green:cart:changed', this.refresh);
        }
    }

    window.customElements.define('green-shopping-cart', GreenShoppingCart);


    class GreenBuy extends HTMLElement {
        static get observedAttributes() {
            return ['item-id'];
        }

        connectedCallback() {
            this.addToCart = this.addToCart.bind(this);
            this.render();
            this.firstChild.addEventListener('click', this.addToCart);
        }

        addToCart() {
            state.items.push(this.getAttribute('item-id'));
            this.dispatchEvent(new CustomEvent('green:cart:changed', {
                bubbles: true,
            }));
        }

        render() {
            const itemId = this.getAttribute('item-id');
            let item = localStorage.getObject('items').filter((item) => item.id === itemId)[0]

            this.innerHTML = `<button type="button">buy for ${item.price}</button>`;
        }

        attributeChangedCallback(attr, oldValue, newValue) {
            this.render();
        }

        disconnectedCallback() {
            this.firstChild.removeEventListener('click', this.addToCart);
        }
    }

    window.customElements.define('green-buy', GreenBuy);
}());
