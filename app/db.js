Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};

localStorage.setObject('categories', ['books', 'films', 'music']);
localStorage.setObject('items', [
    {id: 'b1', price: '13 €', title: 'Das Paket', category: 'books'},
    {id: 'b2', price: '15€', title: 'Die Chemie des Todes', category: 'books'},
    {id: 'f1', price: '19€', title: 'Fifty Shades of Grey', category: 'films'},
    {id: 'm1', price: '21€', title: 'Vergiss mein nicht', category: 'music'}
]);