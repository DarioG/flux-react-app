var React = require('react');
var MainView = require('./components/MainView');

var data = {
        'id': '001100112',
        'name': 'Espresso Coffee Brazil',
        'image': 'brazil-coffee.jpg',
        'description': 'This coffee is picked by hand when fully ripe, sorted and dried with a Natural Process for 16 days on raised beds. Aroma of hazelnut and chocolate, stone fruit acidity with mild tropical fruit, rich and smooth chocolate mouthfeel.',
        'variants': [{
            'sku': 123123123,
            'type': '284g Package',
            'price': 10.85,
            'inventory': 1
        }, {
            'sku': 124124124,
            'type': '6 Pack',
            'price': 62.99,
            'inventory': 5
        },{
            'sku': 125125125,
            'type': '12 Pack',
            'price': 119.99,
            'inventory': 3
        }]
    };
React.render(
  <MainView data={data}/>,
  document.getElementById('main')
)

//ProductAction.loadData();