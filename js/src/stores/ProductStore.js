var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _data = {};
var _selectedProduct;

function addData(data) {
    _data = data;

    data.variants.forEach(function (item) {
        item.remains = item.inventory;
    });
}

function removeFromInventory(sku){
    _data.variants.forEach(function (item) {
        if (item.sku === sku) {
            item.remains--;
        }
    });
}

function setSelected(sku) {
    _selectedProduct = parseInt(sku, 10);
}

var ProductStore = assign({}, EventEmitter.prototype, {
    getData: function () {
        return _data;
    },

    getSelectedProduct: function () {
        return _selectedProduct;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case AppConstants.PRODUCT_LOADED:
            addData(action.data);
            setSelected(action.data.variants[0].sku);
            ProductStore.emitChange();

            break;
        case AppConstants.PRODUCT_SELECTED:
            setSelected(action.sku);
            ProductStore.emitChange();

            break;

        case AppConstants.ADD_TO_CART:
            removeFromInventory(action.product.sku);
            ProductStore.emitChange();

            break;
    }
});

module.exports = ProductStore;