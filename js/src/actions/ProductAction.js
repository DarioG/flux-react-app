var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// Remove when we add the real API call
function fetchData() {
    return {
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
}

var ProductAction = {

    /**
    *   Fetch the initial data from the server
    */
    loadData: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.PRODUCT_LOADED,
            data: fetchData()
        });
    },

    selectProduct: function (sku) {
        AppDispatcher.dispatch({
            actionType: AppConstants.PRODUCT_SELECTED,
            sku: sku
        });
    },

    addToCart: function (product) {
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_TO_CART,
            product: product
        });
    }
};

module.exports = ProductAction;