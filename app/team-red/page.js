/* globals document */
const $app = document.getElementById('app');

// data
const categories = localStorage.getObject('categories');

const state = {
    category: 'books',
};

function renderCategoryItem(category) {
    const active = state.category === category ? 'active ' : '';
    return `<span class="${active}red-cat-item ${category}" data-category="${category}">${category}</span>`;
}

function renderPage() {
  const category = categories.find(cat => state.category === cat);
  $app.innerHTML = `
    <div id="navigation">${categories.map(renderCategoryItem).join('')}</div>
    <blue-search id="search">Search</blue-search>
    <violet-details id="details" category="${category}">Details</violet-details>
    <green-shopping-cart id="shopping-cart">Shopping Cart</green-shopping-cart>
  `;
}

function rerender() {
    removeListeners();
    renderPage();
    addListeners();
}

function addListeners() {
    const $items = document.querySelectorAll('#navigation .red-cat-item');
    Array.prototype.forEach.call($items, $item => (
        $item.addEventListener('click', handleClickOption)
    ));
}

function removeListeners() {
    const $items = document.querySelectorAll('#navigation .red-cat-item');
    Array.prototype.forEach.call($items, $item => (
        $item.removeEventListener('click', handleClickOption)
    ));
}

function handleClickOption(e) {
    const category = e.currentTarget.getAttribute('data-category');
    state.category = category;
    document.getElementById('details').setAttribute('category', category);
}

renderPage();
addListeners();