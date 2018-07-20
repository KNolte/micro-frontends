/* globals HTMLElement, window, CustomEvent */
(function fragments() {

    const state = {
        items: []
    };


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
            let item = localStorage.getObject('items').find((item) => item.id === this.getAttribute('item-id'))
            state.items.push(item);
            this.dispatchEvent(new CustomEvent('green:cart:changed', {
                bubbles: true,
            }));
        }

        render() {
            const itemId = this.getAttribute('item-id');
            let item = localStorage.getObject('items').find((item) => item.id === itemId)

            this.innerHTML = `<button class="green-buy" type="button">buy for ${item.price}</button>`;
        }

        attributeChangedCallback(attr, oldValue, newValue) {
            this.render();
        }

        disconnectedCallback() {
            this.firstChild.removeEventListener('click', this.addToCart);
        }
    }

    window.customElements.define('green-buy', GreenBuy);

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
            this.innerHTML = '<h3>shoppingCart</h3>';

            for (let item of state.items) {
                this.innerHTML += `<span class="item">${item.title} ${item.price} €</span></br>`;
            }

            if (state.items.length) {
                console.log(JSON.stringify(state.items.reduce((previous, current) => previous + parseInt(current.price), 0)));
                this.innerHTML += `
                    <h3 class="sum">Total: ${state.items.reduce((previous, current) => previous + parseInt(current.price), 0)} €</h3>
                `;
            }
        }

        disconnectedCallback() {
            window.removeEventListener('green:cart:changed', this.refresh);
        }
    }

    window.customElements.define('green-shopping-cart', GreenShoppingCart);
}());
