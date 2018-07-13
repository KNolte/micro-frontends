/* globals document */
const $app = document.getElementById('app');

// data
const db = localStorage.getObject('db');

const state = {
    category: 'books',
};

function renderCategoryItem(category) {
    const active = state.category.title === category ? 'active ' : '';
    return `<span class="${active}red-cat-item ${category.title}" data-category="${category.title}">${category.title}</span>`;
}

function renderPage() {
  const category = db.find(cat => state.category === cat.title);
  $app.innerHTML = `
    <div id="navigation">${db.map(renderCategoryItem).join('')}</div>
    <blue-search id="search">Search</blue-search>
    <violet-details id="details" category="${category.title}">Details</violet-details>
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