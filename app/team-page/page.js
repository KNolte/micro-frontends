/* globals document */
const $app = document.getElementById('app');

function renderPage() {
  $app.innerHTML = `
    <div id="navigation">Navigation</div>
    <div id="search">Search</div>
    <div id="shopping-cart">Shopping Cart</div>
    <div id="products">Products</div>
  `;
}

renderPage();