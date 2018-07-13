Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};

localStorage.setObject('db', [
    {
        title: 'books',
        items: [
            {price: '13 €', title: 'Das Paket', id: 'b1'},
            {price: '15€', title: 'Die Chemie des Todes', id: 'b2'}
        ]
    },
    {
        title: 'films',
        items: [
            {price: '19€', title: 'Fifty Shades of Grey', id: 'f1'}
        ]
    },
        {title: 'music',
        items: [
            {price: '21€', title: 'Vergiss mein nicht', id: 'm1'}
        ]
    }
]);