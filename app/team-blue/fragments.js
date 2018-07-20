/* globals HTMLElement, window, CustomEvent */
(function fragments() {

    const state = {
    };


    class BlueSearch extends HTMLElement {
        static get observedAttributes() {
            return ['criteria'];
        }

        connectedCallback() {
            this.onInput = this.onInput.bind(this);
            this.render();
            document.getElementById("blue-search-input").addEventListener('input', this.onInput);
        }

        onInput(e) {
            console.log("onInput");
            let criteria = document.querySelector('#blue-search-input').value;
            this.renderDropdown(criteria);
        }

        render() {
            this.innerHTML = `<input id="blue-search-input" type="text" placeholder="search"/>`;
        }

        renderDropdown(criteria) {
            this.removeDropdown();
            let items = localStorage.getObject('items');
            let dropdownHtml = '<div id="blue-dropdown">';

            for (let item of items.filter((item) => item.title.indexOf(criteria) !== -1)) {
                dropdownHtml += `<div class="blue-item">${item.title}</div>`;
            }

            dropdownHtml += '</div>';

            this.innerHTML += dropdownHtml;
        }

        removeDropdown() {
            let element = document.getElementById("blue-dropdown");
            if (element) {
                element.parentNode.removeChild(element);
            }
        }

        attributeChangedCallback(attr, oldValue, newValue) {
            this.render();
        }

        disconnectedCallback() {
        }
    }

    window.customElements.define('blue-search', BlueSearch);
}());
