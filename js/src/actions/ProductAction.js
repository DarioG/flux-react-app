var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var ajax = require('../utils/ajax');

function dataLoaded(data) {
    AppDispatcher.dispatch({
        actionType: AppConstants.PRODUCT_LOADED,
        data: data
    });
}

var ProductAction = {

    /**
    *   Fetch the initial data from the server
    */
    loadData: function () {
        ajax.get('api.json', dataLoaded, this);

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