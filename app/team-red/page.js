/* globals document */
const $app = document.getElementById('red-app');

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
    <div id="red-navigation">${categories.map(renderCategoryItem).join('')}</div>
    <blue-search id="blue-search"></blue-search>
    <violet-details id="violet-details" category="${category}">Details</violet-details>
    <green-shopping-cart id="green-shopping-cart">shopping cart</green-shopping-cart>
  `;
}

function rerender() {
    removeListeners();
    renderPage();
    addListeners();
}

function addListeners() {
    const $items = document.querySelectorAll('#red-navigation .red-cat-item');
    Array.prototype.forEach.call($items, $item => (
        $item.addEventListener('click', handleClickOption)
    ));
}

function removeListeners() {
    const $items = document.querySelectorAll('#red-navigation .red-cat-item');
    Array.prototype.forEach.call($items, $item => (
        $item.removeEventListener('click', handleClickOption)
    ));
}

function handleClickOption(e) {
    const category = e.currentTarget.getAttribute('data-category');
    state.category = category;
    rerender();
}

renderPage();
addListeners();