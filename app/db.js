Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
    let value = this.getItem(key);
    return value && JSON.parse(value);
};

localStorage.setObject('categories', ['books', 'films', 'music']);
localStorage.setObject('items', [
    {id: 'b1', price: 13, title: 'Das Paket', category: 'books', thumb_url: 'assets/das_paket.jpg'},
    {id: 'b2', price: 15, title: 'Die Chemie des Todes', category: 'books', thumb_url: 'assets/die_chemie_des_todes.jpg'},
    {id: 'f1', price: 19, title: 'Fifty Shades of Grey', category: 'films', thumb_url: 'assets/fifty_shades_of_grey.jpg'},
    {id: 'm1', price: 21, title: 'Bravo Hits', category: 'music', thumb_url: 'assets/bravo_hits.jpg'}
]);